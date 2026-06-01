import { DialogueStorage, CardModelStorage, GameVariableStorage, Dialogue, DialogueOption, CardModel, Mood } from "../types/types";
import DisplayManager from "./displayManager";
import PlayerManager from "./playerManager";
import Card from "./card";

// JSON data
import Dialogues from "../data/dialogues.json";
import CardModels from "../data/cardModels.json";

/**
 * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique "instance".
 */
export default class GameManager {
    // Singleton instance for global access
    static instance: GameManager;

    dialogues: DialogueStorage;
    cards: CardModelStorage;
    gameVariables: GameVariableStorage;

    displayManager: DisplayManager;
    playerManager: PlayerManager;

    currentDialogue: Dialogue;
    currentDialogueText: number = 0; // Key de l'entrée du tableau "texts" actuellement affichée du dialogue en cours
    currentDialogueCardsGained: boolean = false;

    inDialogueChoice: boolean = false; // True si un choix de dialogue est affiché et qu'on attend que le joueur sélectionne une option
    dialogueOptionSelected: DialogueOption | null = null; // L'option de dialogue actuellement sélectionnée par le joueur (null si aucune)

    awaitingForAnimation: boolean = false; // True si on attend une fin d'animation et que les interactions sont interdites pendant ce temps

    constructor() {
        GameManager.instance = this;

        this.dialogues = Dialogues as DialogueStorage;
        this.cards = CardModels as CardModelStorage;
        this.gameVariables = {} as GameVariableStorage;

        this.displayManager = new DisplayManager();
        this.playerManager = new PlayerManager();

        this.currentDialogue = this.dialogues["intro_001"];
        this.playIntroScreen();
    }

    /**
     * Affiche l'écran d'introduction du jeu
     */
    playIntroScreen() {
        // TODO: do stylish intro stuff
        this.dialogueShowText();
    }

    /** Le joueur a cliqué pour la prochaine interaction au sein d'un dialogue */
    dialogueOverlayClick() {
        if(this.awaitingForAnimation)
            return; // On attend une fin d'animation : pas d'interaction

        // Un texte est en train d'être affiché lettre par lettre ? Alors on l'affiche instantanément
        if(this.displayManager.isWriting) {
            this.displayManager.instantWriteDialogueText();
            return;
        }
        
        // Si on est arrivé jusqu'ici, c'est que le texte du dialogue a fini de s'afficher, on peut passer à la suite du dialogue
        this.currentDialogueText ++;

        // Reste-t-il des textes dans le dialogue en cours ?
        if(this.currentDialogueText < this.currentDialogue.texts.length) {
            this.dialogueShowText();
            return;
        }
        // Y a-t-il des options à la fin du dialogue ?
        if(this.currentDialogue.options) {
            this.dialogueShowOptions();
            return;
        }
        // Y a-t-il des cartes à gagner qui n'ont pas encore été gagnées ?
        if(this.currentDialogue.cardGain && !this.currentDialogueCardsGained) {
            this.dialogueCardGain();
            return;
        }
        // Y a-t-il un goto dans le dialogue ?
        if(this.currentDialogue.goto) {
            this.dialogueGoto(this.currentDialogue.goto);
            return;
        }
        // Si non... y a un problème
        console.error("GameManager::dialogueOverlayClick() : s'est fini sans résolution valable");
    }

    dialogueShowText() {
        this.displayManager.displayDialogueText(this.currentDialogue, this.currentDialogueText);
    }

    dialogueShowOptions() {
        // TODO: gestion des conditions d'affichage des options
        this.displayManager.displayDialogueOptions(this.currentDialogue.options!);

        this.inDialogueChoice = true;
    }

    /**
     * Fais gagner au joueur les cartes du dialogue et affiche l'interface correspondante
     */
    dialogueCardGain() {
        const cardsToGain: Card[] = []; 
        // Récupération des objets Card avec leurs id
        this.currentDialogue.cardGain!.forEach(cardId => {
            cardsToGain.push(new Card(this.getCardModel(cardId)));
        });
        this.displayManager.displayNewCards(cardsToGain);
        this.currentDialogueCardsGained = true;
        
        // On ajoute ces cartes au deck du joueur (pioche par défaut)
        this.playerManager.gainCards(cardsToGain);
    }

    /**
     * Déclenché quand le joueur clique sur l'interface d'affichage des nouvelles cartes
     */
    newCardsOverlayClick(): void {
        if(this.awaitingForAnimation)
            return;

        // Animation de disparition des nouvelles cartes
        this.displayManager.hideNewCards()
            .then(() => {
                // Après la fin de l'animation de disparition de l'overlay, on passe à la suite des dialogues
                this.dialogueOverlayClick();
            });
    }

    /**
     * Clic du joueur sur une carte de sa main
     */
    cardClick(card: Card): void {
        // Il ne se passe rien si on n'est pas dans un choix de dialogue ou si on attend une fin d'animation
        if(!this.inDialogueChoice || this.awaitingForAnimation)
            return;

        // Ajoute / retire la carte en question
        this.playerManager.toggleCard(card);

        // Update de l'affichage des cartes
        this.cardsUpdateStatus();

        // Update de l'affichage des options de dialogue
        this.dialogueOptionsUpdateStatus();
    }

    /**
     * Clic du joueur sur une option de dialogue
     * @param optionIndex 
     * @returns 
     */
    dialogueOptionClick(optionIndex: number): void {
        if(this.awaitingForAnimation)
            return;
        
        const option = this.currentDialogue.options?.[optionIndex];
        if(!option) {
            console.error("GameManager::dialogueOptionClick() : optionIndex %d invalide", optionIndex);
            return;
        }
        console.log("Option cliquée : ", option);

        if(this.dialogueOptionSelected == option) {
            // C'est option qui est déjà sélectionnée : on la deselect
            this.unselectDialogueOption();
            return;
        }
        this.selectDialogueOption(option, optionIndex);
    }

    selectDialogueOption(option: DialogueOption, optionIndex: number) {
        this.dialogueOptionSelected = option;

        const scoreFromCards = this.cardsUpdateStatus();

        // On met à jour l'affichage de l'option de dialogue. Pas besoin de refaire l'update de toutes les options avec dialogueOptionsUpdateStatus(), seule l'option sélectionnée est impactée
        if(scoreFromCards >= option.score) {
            // L'option match
            this.displayManager.changeDialogueOptionStatus(optionIndex, "match");
        }
        else {
            // L'option est simplement sélectionnée
            this.displayManager.changeDialogueOptionStatus(optionIndex, "selected");
        }
    }

    unselectDialogueOption() {
        this.dialogueOptionSelected = null;

        // Update de l'affichage des options de dialogue
        this.dialogueOptionsUpdateStatus();

        // Update de l'affichage des cartes
        this.cardsUpdateStatus();
    }

    /**
     * Met à jour le statut d'affichage des cartes de la main du joueur ("selected" | "match" | "nomatch" | "matchable" | null) et renvoie le score des cartes sélectionnées pour l'option sélectionnée
     * @returns number : le score des cartes sélectionnées pour l'option sélectionnée (0 si pas d'option sélectionnée)
     */
    cardsUpdateStatus(): number {
        if(this.dialogueOptionSelected) {
            // Une option est sélectionnée
            const option = this.dialogueOptionSelected;
        
            /* On passe en revue les cartes du joueur pour mettre à jour leur affichage
            *  - match : la carte est sélectionnée et contribue à l'option
            *  - nomatch : la carte est sélectionnée et ne contribue pas à l'option ou est superflue
            *  - matchable : la carte n'est pas sélectionnée mais pourrait contribuer à l'option
            */
            let scoreFromCards = 0;
            this.playerManager.hand.forEach(card => {
                if(this.playerManager.cardsSelected.includes(card)) {
                    // Cette carte est sélectionnée...
                    if(scoreFromCards >= option.score) {
                        // ... et elle est superflue : nomatch
                        this.displayManager.changeCardStatus(card, "nomatch");
                    }
                    else if(this.cardMatchWithDialogueOption(card, option)) {
                        // ... et elle correspond à l'option : match
                        this.displayManager.changeCardStatus(card, "match");
                        scoreFromCards += card.score;
                    }
                    else {
                        // Et elle ne correspond pas à l'option : nomatch
                        this.displayManager.changeCardStatus(card, "nomatch");
                    }
                }
                else {
                    // Cette carte n'est pas sélectionnée...
                    if(this.cardMatchWithDialogueOption(card, option)) {
                        // ... et elle correspond à l'option : matchable
                        this.displayManager.changeCardStatus(card, "matchable");
                    }
                }
            });
            return scoreFromCards;
        }
        else {
            // Pas d'option sélectionnée
            this.playerManager.hand.forEach(card => {
                if(this.playerManager.cardsSelected.includes(card)) {
                    // Cette carte est sélectionnée : selected
                    this.displayManager.changeCardStatus(card, "selected");
                }
                else {
                    // Cette carte n'est pas sélectionnée : affichage normal
                    this.displayManager.changeCardStatus(card, null);
                }
            });
            return 0;
        }
    }

    /**
     * Passe en revue les options de dialogue affichées pour définir leur statut ("match" | "matchable" | "selected" | rien) en fonction des cartes sélectionnées par le joueur
     * @returns boolean
     */
    dialogueOptionsUpdateStatus(): void {
        // On calcule le score par mood pour montrer les options de dialogue matchable
        const scoreByMood = {
            "Agressif": 0,
            "Calme": 0,
            "Hautain": 0,
            "Joyeux": 0,
            "Séducteur": 0
        } as Record<Mood, number>;

        this.playerManager.cardsSelected.forEach(card => {
            // On ajoute le score aux moods correspondants
            card.moods.forEach(mood => {
                scoreByMood[mood] += card.score;
            });
        });

        // On passe en revue les options de dialogue pour voir lesquelles sont matchable
        this.currentDialogue.options?.forEach((option, index) => {
            let score: number = 0;
            option.moods.forEach(mood => {
                score += scoreByMood[mood];
            });
            if(score >= option.score) {
                // La conditions de score de l'option est remplie...
                if(this.dialogueOptionSelected == option) {
                    // ... et c'est l'option sélectionnée : match
                    this.displayManager.changeDialogueOptionStatus(index, "match");
                }
                else {
                    // ... et elle n'est pas sélectionnée : matchable
                    this.displayManager.changeDialogueOptionStatus(index, "matchable");
                }
            }
            else {
                // Score insufisant...
                if(this.dialogueOptionSelected == option) {
                    // ... et c'est l'option sélectionnée : selected
                    this.displayManager.changeDialogueOptionStatus(index, "selected");
                }
                else {
                    // ... et elle n'est pas sélectionnée : null
                    this.displayManager.changeDialogueOptionStatus(index, null);
                }
            }
        });
    }

    /**
     * Cette carte matche-t-elle avec cette option de dialogue ?
     * @param card - Card
     * @returns boolean 
     */
    cardMatchWithDialogueOption(card: Card, option: DialogueOption): boolean {
        // Une carte matche avec une option de dialogue si elle correspond à au moins un des moods de l'option
        return option.moods.some(mood => card.moods.includes(mood));
    }

    /**
     * Passe au dialogue indiqué
     * @param dialogueId - string : l'id du dialogue vers lequel aller
     */
    dialogueGoto(dialogueId: string) {
        // On réinitialise les valeurs de contrôle du dialogue
        this.currentDialogueText = 0;
        this.currentDialogueCardsGained = false;

        // Vérification de validité
        if(!(dialogueId in this.dialogues)) {
            console.error("GameManager::dialogueGoto() : dialogueId %s inconnu", dialogueId);
        }
        this.currentDialogue = this.dialogues[dialogueId];

        this.dialogueShowText();
    }

    /**
     * Récupère un modèle de carte du storage grâce à son id
     * @param cardId - string : l'id de la carte à récupérer
     */
    getCardModel(cardId: string): CardModel {
        // Vérification de validité
        if(!(cardId in this.cards)) {
            console.error("GameManager::getCard() : cardId %s inconnu", cardId);
        }
        const card = this.cards[cardId];
        return card;
    }

    helloWorld() {
        console.log("Hello, Bewitched!");
    }

    printDialogues() {
        console.log(this.dialogues);
    }

    printCards() {
        console.log(this.cards);
    }
}
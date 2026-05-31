import { DialogueStorage, CardStorage, GameVariableStorage, Dialogue, DialogueOption, Card, Mood } from "../types/types";
import DisplayManager from "./displayManager";
import PlayerManager from "./playerManager";

// JSON data
import Dialogues from "../data/dialogues.json";
import Cards from "../data/cards.json";

/**
 * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique "instance".
 */
export default class GameManager {
    // Singleton instance for global access
    static instance: GameManager;

    dialogues: DialogueStorage;
    cards: CardStorage;
    gameVariables: GameVariableStorage;

    displayManager: DisplayManager;
    playerManager: PlayerManager;

    currentDialogue: Dialogue;
    currentDialogueText: number = 0; // Key de l'entrée du tableau "texts" actuellement affichée du dialogue en cours
    currentDialogueCardsGained: boolean = false;

    dialogueOptionSelected: DialogueOption | null = null; // L'option de dialogue actuellement sélectionnée par le joueur (null si aucune)

    awaitingForAnimation: boolean = false; // True si on attend une fin d'animation et que les interactions sont interdites pendant ce temps

    constructor() {
        GameManager.instance = this;

        this.dialogues = Dialogues as DialogueStorage;
        this.cards = Cards as CardStorage;
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
    }

    /**
     * Fais gagner au joueur les cartes du dialogue et affiche l'interface correspondante
     */
    dialogueCardGain() {
        const cardsToGain: Card[] = []; 
        // Récupération des objets Card avec leurs id
        this.currentDialogue.cardGain!.forEach(cardId => {
            cardsToGain.push(this.getCard(cardId));
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
            this.dialogueOptionSelected = null;
            // TODO: update de l'affichage pour montrer que l'option n'est plus sélectionnée, ainsi que de l'affichage des cartes pour que toutes celles sélectionnées repassent en "selected"
            return;
        }
        this.dialogueOptionSelected = option;
        this.reviewCardsSelectedForDialogueOptionSelected();
    }

    /**
     * Passe en revue les cartes sélectionnées par le joueur pour l'option de dialogue sélectionnée. Appelé quand le joueur pré-sélectionne une option dans un choix de dialogue
     * @returns boolean True si l'option de dialogue est un match
     */
    reviewCardsSelectedForDialogueOptionSelected(): boolean {
        if(this.playerManager.cardsSelected.length == 0)
            return false;

        let scoreFromCards = 0;
        const option: DialogueOption = this.dialogueOptionSelected!;
        
        this.playerManager.cardsSelected.forEach(card => {
            if(scoreFromCards >= option.score) {
                // Cette option est superflue : nomatch
            }
            else if(this.cardMatchWithDialogueOption(card, option)) {
                // Cette option correspond : match
                scoreFromCards += card.score;
            }
            else {
                // Cette option ne correspond pas : nomatch
            }
        });
        return scoreFromCards >= option.score;
    }

    /**
     * Cette option de dialogue matche-t-elle avec les cartes actuellement sélectionnées par le joueur ? Appelé quand le joueur clique sur une carte dans un choix de dialogue
     * @param option - DialogueOption
     * @returns boolean
     */
    dialogueOptionMatchableWithCardsSelected(option: DialogueOption): boolean {
        if(option.score <= 0) 
            return true; // Pas de pré-requis de score : forcément vrai
        if(this.playerManager.cardsSelected.length == 0)
            return false; // Pas de cartes sélectionnées : forcément faux

        // On va parcourir les cartes sélectionnées par le joueur qui correspondent aux moods de l'option, et calculer leurs scores
        let scoreFromCards = 0;
        this.playerManager.cardsSelected.forEach(card => {
            if(this.cardMatchWithDialogueOption(card, option)) {
                scoreFromCards += card.score;
            }
        });
        return scoreFromCards >= option.score;
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
     * Récupère une carte du storage grâce à son id
     * @param cardId - string : l'id de la carte à récupérer
     */
    getCard(cardId: string): Card {
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
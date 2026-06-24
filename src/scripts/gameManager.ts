import { DialogueStorage, CardModelStorage, GameVariableStorage, Dialogue, DialogueOption, CardModel, Mood, GameEffects, GameVariableChange, GameCondition } from "../types/types";
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
    dialogueOptionCardsGained: boolean = false; // True si les cartes de l'option sélectionnée ont été gagnées

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

        // Gain des cartes de départ et pioche
        this.playerManager.gainStartingDeck();
        this.playerManager.resetPlayerStacks();
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
        this.displayManager.displayDialogueText(this.currentDialogue.texts[this.currentDialogueText]);
    }

    /**
     * Affiche les options de dialogue du dialogue en cours
     */
    dialogueShowOptions() {
        // Vérification des conditions d'affichage des options
        const optionsToShow: DialogueOption[] = [];
        this.currentDialogue.options!.forEach((option) => {
            if(!option.conditions || this.satisfyConditions(option.conditions)) {
                // Pas de conditions, ou les conditions sont satisfaites : on affiche
                optionsToShow.push(option);
            }
        })
        this.displayManager.displayDialogueOptions(optionsToShow);
        
        // Update de l'affichage des options de dialogue
        this.dialogueOptionsUpdateStatus();

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

    dialogueOptionCardGain() {
        const cardsToGain: Card[] = []; 
        // Récupération des objets Card avec leurs id
        this.dialogueOptionSelected!.cardGain!.forEach(cardId => {
            cardsToGain.push(new Card(this.getCardModel(cardId)));
        });
        this.displayManager.displayNewCards(cardsToGain);
        this.dialogueOptionCardsGained = true;
        
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
                if(this.currentDialogueCardsGained)
                    // On confirme le gain de cartes du dialogue avant de passer à la suite du dialogue
                    this.dialogueOverlayClick();
                else if(this.dialogueOptionCardsGained && this.dialogueOptionSelected!.goto)
                    // On confirme le gain de cartes de l'option de dialogue avant de passer au goto de cette option
                    this.dialogueGoto(this.dialogueOptionSelected!.goto);
                else 
                    // On confirme le gain de cartes de l'option de dialogue avant de passer au goto du dialogue
                    this.dialogueGoto(this.currentDialogue.goto!);
                
                this.currentDialogueCardsGained = false;
                this.dialogueOptionCardsGained = false;
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
     * @param option - DialogueOption : l'option de dialogue sur laquelle le joueur a cliqué
     * @param optionIndex - number : l'index de l'option de dialogue dans les options actuellement affichées (attention, pas forcément l'index de l'option dans le tableau "options" du dialogue car certaines peuvent ne pas être affichées à cause de conditions)
     * @returns 
     */
    dialogueOptionClick(option: DialogueOption, optionIndex: number): void {
        if(this.awaitingForAnimation)
            return;

        if(this.dialogueOptionSelected == option) {
            // C'est l'option qui est déjà sélectionnée : on la deselect
            this.unselectDialogueOption();
            return;
        }
        else if(this.dialogueOptionSelected) {
            // Une autre option est déjà sélectionnée : on la deselect avant de sélectionner la nouvelle option
            this.unselectDialogueOption();
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

    confirmDialogueOption() {
        console.log("Option confirmée : ", this.dialogueOptionSelected);

        if(!this.dialogueOptionSelected) {
            console.error("GameManager::confirmDialogueOption() : aucune option sélectionnée");
            return;
        }
        const option = this.dialogueOptionSelected;

        // On retire les cartes nécessaires à cette option
        const cardsToDiscard: Card[] = [];
        let scoreFromCards = 0;
        this.playerManager.cardsSelected.some((card) => {
            // On utilise some() pour pouvoir sortir de la boucle dès que le score des cartes sélectionnées est suffisant pour l'option
            if(this.cardMatchWithDialogueOption(card, option)) {
                cardsToDiscard.push(card);
                scoreFromCards += card.score;
            }
            if(scoreFromCards >= option.score) {
                return true;
            }
        });
        if(scoreFromCards < option.score) {
            console.error("GameManager::confirmDialogueOption() : score insuffisant");
            return;
        }
        cardsToDiscard.forEach((card) => {
            this.playerManager.discard(card);
            this.displayManager.removeCardFromHand(card);
        })

        // On réinitialise la sélection des cartes et leur affichage
        this.playerManager.cardsSelected = [];
        this.playerManager.hand.forEach((card) => {
            this.displayManager.changeCardStatus(card, null);
        })

        // On pioche jusqu'à remplir la main
        this.playerManager.drawCards();

        // On applique les changements de variables
        if(option.variableChanges) {
            this.applyGameVariableChanges(option.variableChanges);
        }

        // On cache les options de dialogue
        this.displayManager.hideDialogueOptions();

        // On affiche le texte de l'option sélectionnée dans le flux des dialogues si l'option n'a pas l'indication "dontWriteInDialogue"
        if(!option.dontWriteInDialogue) {
            this.displayManager.displayDialogueText(option.text, true, ["option-text"]);
        }
        
        if(option.cardGain) {
            // On gagne les cartes, et on ira au goto après le click
            this.dialogueOptionCardGain();
        }
        else if(option.goto) {
            // Pas de cartes à gagner, on peut aller directement au goto de l'option
            this.dialogueGoto(option.goto);
        }
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
                    else {
                        // ... et elle ne correspond pas à l'option : affichage normal
                        this.displayManager.changeCardStatus(card, null);
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

        // On passe en revue les options de dialogue pour voir lesquelles sont matchables
        this.currentDialogue.options?.forEach((option, index) => {
            let score: number = 0;

            this.playerManager.cardsSelected.forEach(card => {
                // Si les moods de la carte correspondent aux moods de l'option, on l'ajoute au score
                if(this.cardMatchWithDialogueOption(card, option)) {
                    score += card.score;
                }
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
    dialogueGoto(dialogueId: string): void {
        // Avant le goto, on applique les éventuels GameEffects de l'actuel dialogue
        if(this.currentDialogue?.gameEffects) {
            this.applyGameEffects(this.currentDialogue.gameEffects)
        }

        // On réinitialise les valeurs de contrôle du dialogue
        this.currentDialogueText = 0;

        // Vérification de validité
        if(!(dialogueId in this.dialogues)) {
            console.error("GameManager::dialogueGoto() : dialogueId %s inconnu", dialogueId);
        }
        this.currentDialogue = this.dialogues[dialogueId];

        // S'il y a un texte à afficher, on l'affiche...
        if(this.currentDialogue.texts.length > 0)
            this.dialogueShowText();
        // Sinon et s'il y a un choix à afficher, on l'affiche
        else if(this.currentDialogue.options && this.currentDialogue.options.length > 0)
            this.dialogueShowOptions();
    }

    applyGameEffects(gameEffects: GameEffects[]): void {
        gameEffects.forEach(gameEffect => {
            switch (gameEffect) {
                case "resetPlayerStacks":
                    this.playerManager.resetPlayerStacks();
                    break;
                
                case "allowDisplayHand":
                    this.displayManager.canDisplayHand = true;
                    break;
            
                default:
                    console.error("GameManager::applyGameEffect() : gameEffect %s inconnu", gameEffect);
                    break;
            }
        });
    }

    /**
     * Applique des changements de variables de jeu
     * @param variableChanges 
     */
    applyGameVariableChanges(variableChanges: GameVariableChange[]): void {
        variableChanges.forEach(change => {
            let value: number;
            if(typeof change.value == "string") {
                // La value est une variable de jeu : on récupère sa valeur
                value = this.gameVariables[change.value];
            } else {
                value = Number(change.value);
            }

            if(!(change.variable in this.gameVariables)) {
                // Si la variable n'existe pas encore, on l'initialise à 0
                this.gameVariables[change.variable] = 0;
            }

            switch (change.operator) {
                case "+=":
                    this.gameVariables[change.variable] += value;
                    break;
                case "-=":
                    this.gameVariables[change.variable] -= value;
                    break;
                case "=":
                    this.gameVariables[change.variable] = value;
                    break;
                default:
                    console.error("GameManager::applyGameVariableChanges() : operator %s inconnu", change.operator);
                    break;
            }
        });
    }

    satisfyConditions(conditions: GameCondition[]): boolean {
        let test: boolean = true;
        conditions.forEach((condition) => {
            // Récupération de la valeur des operands
            const operand1 = this.gameVariables[condition.operand1];
            let operand2: number;
            if(typeof condition.operand2 == "number") {
                // Valeur fixe
                operand2 = condition.operand2;
            }
            else {
                // Valeur de variable
                operand2 = this.gameVariables[condition.operand2];
            }

            // Test de la condition
            switch(condition.operator) {
                case "==":
                    test = test && (operand1 == operand2);
                    break;
                case "!=":
                    test = test && (operand1 != operand2);
                    break;
                case ">":
                    test = test && (operand1 > operand2);
                    break;
                case "<":
                    test = test && (operand1 < operand2);
                    break;
                case ">=":
                    test = test && (operand1 >= operand2);
                    break;
                case "<=":
                    test = test && (operand1 <= operand2);
                    break;
            }
        });
        return test;
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
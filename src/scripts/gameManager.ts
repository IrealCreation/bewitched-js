import { DialogueStorage, CardStorage, GameVariableStorage, Dialogue, DialogueOption, Card, Mood } from "../types/types";
import DisplayManager from "./displayManager";

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

    currentDialogue: Dialogue;
    currentDialogueText: number = 0; // Key de l'entrée du tableau "texts" actuellement affichée du dialogue en cours
    currentDialogueCardsGained: boolean = false;

    constructor() {
        GameManager.instance = this;

        this.dialogues = Dialogues as DialogueStorage;
        this.cards = Cards as CardStorage;
        this.gameVariables = {} as GameVariableStorage;
        this.displayManager = new DisplayManager();

        this.currentDialogue = this.dialogues["intro_001"];
        this.playIntroScreen();
    }

    /**
     * Affiche l'écran d'introduction du jeu
     */
    playIntroScreen() {
        // TODO: do stylish intro stuff
        // this.dialogueShowText();
        // Test d'affichage des cartes
        this.dialogueCardGain();
    }

    /** Le joueur a cliqué pour la prochaine interaction au sein d'un dialogue */
    dialogueClick() {
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
        }
        // Si non... y a un problème
        console.error("dialogueClick s'est fini sans résolution valable");
    }

    dialogueShowText() {
        this.displayManager.displayDialogueText(this.currentDialogue, this.currentDialogueText);
    }

    dialogueShowOptions() {

    }

    dialogueCardGain() {
        // Test avec des cartes prédéfinies pour l'instant
        const cardsToGain = [this.cards["1ac"], this.cards["2ah_farouche_independance"], this.cards["3c_oeil_tempete"]];
        this.displayManager.displayNewCards(cardsToGain);
        this.currentDialogueCardsGained = true;
    }

    dialogueGoto(dialogueId: string) {
        // On réinitialise les valeurs de contrôle du dialogue
        this.currentDialogueText = 0;
        this.currentDialogueCardsGained = false;

        this.currentDialogue = this.dialogues[dialogueId];

        this.dialogueShowText();
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
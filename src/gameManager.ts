import { DialogueStorage, CardStorage, Dialogue, DialogueOption, Card, Mood } from "./types";
import Dialogues from "./data/dialogues.json";
import Cards from "./data/cards.json";

/**
 * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique "instance".
 */
export default class GameManager {
    // Singleton instance for global access
    static instance: GameManager;

    dialogues: DialogueStorage;
    cards: CardStorage;

    constructor() {
        this.dialogues = Dialogues as DialogueStorage;
        this.cards = Cards as CardStorage;
        GameManager.instance = this;
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
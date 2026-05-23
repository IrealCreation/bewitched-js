/**
 * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique "instance".
 */
export class GameManager {
    constructor() {
        this.dialogues = new DialogueStorage();
        GameManager.instance = this;
    }
    addDialogue(dialogue) {
        this.dialogues[dialogue.id] = dialogue;
    }
    helloWorld() {
        console.log("Hello, world!");
    }
}
export class DialogueStorage {
}
/**
 * Un dialogue est un ensemble d'une ou plusieurs séquences de texte, pouvant éventuellement finir par des options de dialogue ou dans le cas où il n'y en a pas, par une transition vers un autre dialogue.
 */
export class Dialogue {
    constructor(id, texts, goto) {
        this.id = id;
        this.texts = texts;
        this.goto = goto;
        this.options = [];
        this.cardGain = [];
        GameManager.instance.addDialogue(this);
    }
}

/**
 * Le GameManager est responsable de la gestion globale du jeu, et peut être appelé via sa valeur statique "instance".
 */
export class GameManager {
    // Singleton instance for global access
    static instance: GameManager;

    dialogues: DialogueStorage;

    constructor() {
        this.dialogues = new DialogueStorage();
        GameManager.instance = this;
    }

    addDialogue(dialogue: Dialogue) {
        this.dialogues[dialogue.id] = dialogue;
    }

    helloWorld() {
        console.log("Hello, Bewitched!");
    }
}

export class DialogueStorage {
    [id: string]: Dialogue;
}

/**
 * Un dialogue est un ensemble d'une ou plusieurs séquences de texte, pouvant éventuellement finir par des options de dialogue ou dans le cas où il n'y en a pas, par une transition vers un autre dialogue.
 */
export class Dialogue {
    id: string;
    texts: string[];
    options?: DialogueOption[];
    goto: string;
    cardGain?: Card[];

    constructor(id: string, texts: string[], goto: string) {
        this.id = id;
        this.texts = texts;
        this.goto = goto;
        this.options = [];
        this.cardGain = [];

        GameManager.instance.addDialogue(this);
    }
}

/**
 * Une option de dialogue est un choix que le joueur peut faire à la fin d'un dialogue.
 */
export interface DialogueOption {
    text: string;
    mood: Mood[];
    score: number;
    goto: string;
}

/**
 * Carte de psyché du joueur
 */
export interface Card {
    id: string;
    name: string;
    mood: Mood[];
    score: number;
}

export type Mood = "Agressif" | "Calme" | "Hautain" | "Joyeux" | "Séducteur";
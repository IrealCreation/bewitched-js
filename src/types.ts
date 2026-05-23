export interface DialogueStorage {
    [id: string]: Dialogue;
}

export interface CardStorage {
    [id: string]: Card;
}

/**
 * Un dialogue est un ensemble d'une ou plusieurs séquences de texte, pouvant finir par des options de dialogue ou (dans le cas où il n'y en a pas) par une transition vers un autre dialogue.
 */
export interface Dialogue {
    id: string;
    texts: string[];
    options?: DialogueOption[];
    goto: string; // ID du dialogue vers lequel aller à la fin de ce dialogue s'il n'y a pas d'options
    cardGain?: string[]; // IDs des cartes gagnées à la fin du dialogue
}

/**
 * Une option de dialogue est un choix que le joueur peut faire à la fin d'un dialogue.
 */
export interface DialogueOption {
    text: string;
    moods: Mood[];
    score: number;
    goto: string;
}

/**
 * Carte de psyché du joueur
 */
export interface Card {
    id: string;
    name: string;
    moods: Mood[];
    score: number;
}

export type Mood = "Agressif" | "Calme" | "Hautain" | "Joyeux" | "Séducteur";
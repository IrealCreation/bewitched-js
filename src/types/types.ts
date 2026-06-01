export interface DialogueStorage {
    [id: string]: Dialogue;
}

export interface CardModelStorage {
    [id: string]: CardModel;
}

export interface GameVariableStorage {
    [variable: string]: number;
}

/**
 * Un dialogue est un ensemble d'une ou plusieurs séquences de texte, pouvant finir par des options de dialogue ou par une transition vers un autre dialogue.
 */
export interface Dialogue {
    id: string;
    texts: string[];
    options?: DialogueOption[];
    goto?: string; // ID du dialogue vers lequel aller à la fin de ce dialogue s'il n'y a pas d'options ou si l'option choisie n'a pas de goto
    cardGain?: string[]; // IDs des cartes gagnées à la fin du dialogue
    gameEffects?: GameEffects[]; // Effets spéciaux à déclencher dans la programmation du jeu
}

/**
 * Une option de dialogue est un choix que le joueur peut faire à la fin d'un dialogue.
 */
export interface DialogueOption {
    text: string;
    moods: Mood[];
    score: number;
    cardGain?: string[]; // IDs des cartes gagnées quand cette option est choisie
    goto?: string;
    conditions?: GameCondition[]; // Conditions à remplir pour que cette option soit disponible
    variableChanges?: GameVariableChange[]; // Changements de variables à appliquer quand cette option est choisie
}

/**
 * Modèle de carte de psyché du joueur
 */
export interface CardModel {
    id: string;
    name: string;
    moods: Mood[];
    score: number;
}

export interface GameCondition {
    operand1: string;
    operator: "==" | "!=" | ">" | "<" | ">=" | "<=";
    operand2: string | number; // Peut être une variable de jeu (string) ou un nombre
}

export interface GameVariableChange {
    variable: string;
    operator: "+=" | "-=" | "=";
    value: string | number; // Peut être une variable de jeu (string) ou un nombre
}

export type Mood = "Agressif" | "Calme" | "Hautain" | "Joyeux" | "Séducteur";

export type GameEffects = 
    "resetPlayerStacks" // Remet toutes les cartes du deck dans la pioche, la mélange, puis pioche une main
;
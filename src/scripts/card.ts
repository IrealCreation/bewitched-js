import { CardModel, Mood } from "../types/types";


/**
 * Carte de psyché existant dans le deck du joueur, héritée d'un modèle de carte
 */
export default class Card implements CardModel {
    id: string;
    name: string;
    moods: Mood[];
    score: number;
    instanceKey: number; // Numéro de création de la carte, servant d'identifiant unique

    static keyAutoIncrement: number = 0;

    constructor(cardModel: CardModel) {
        this.id = cardModel.id;
        this.name = cardModel.name;
        this.moods = cardModel.moods;
        this.score = cardModel.score;
        this.instanceKey = Card.keyAutoIncrement++;
    }
}
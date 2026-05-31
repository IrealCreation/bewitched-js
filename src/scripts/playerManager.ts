import { Card } from "../types/types";

/**
 * Le PlayerManager contrôle les cartes du joueurs
 */
export default class PlayerManager {
    // Cartes dans la pioche du joueur
    pioche: Card[] = [];
    
    // Cartes dans la main du joueur (nom en anglais pour éviter une confusion sur le terme "main")
    hand: Card[] = [];

    // Cartes actuellement sélectionnées par le joueur dans sa main
    cardsSelected: Card[] = []; 
    
    // Cartes dans la défausse du joueur
    defausse: Card[] = [];

    /**
     * Renvoie la liste de toutes les cartes possédées par le joueur, c'est-à-dire l'agrégation de pioche + main + defausse
     */
    deck(): Card[] {
        const deck: Card[] = this.pioche.concat(this.hand, this.defausse);
        return deck;
    }

    /**
     * Ajoute des cartes au deck du joueur
     * @param cards - Card[] : liste des cartes gagnées par le joueur
     * @param addTo - PlayerCardStack : endroit où ajouter les nouvelles cartes. Si c'est dans la pioche, elle est mélangée (pioche par défaut)
     */
    gainCards(cards: Card[], addTo: PlayerCardStack = "pioche") {
        this.getPlayerCardStack(addTo).push(...cards);
        if(addTo == "pioche") {
            // Si on a ajouté dans la pioche, on mélange cette dernière
            this.shuffle(addTo);
        }
    }

    /**
     * Mélange une de piles de cartes du joueur
     * Source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     * @param stack - PlayerCardStack : la pile à mélanger ("pioche" | "hand" | "defausse")
     */
    shuffle(stack: PlayerCardStack) {
        const array = this.getPlayerCardStack(stack);
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }

    /**
     * Renvoie la pile de cartes correspondante à la valeur de PlayerCardStack
     * @param stack - PlayerCardStack : pile à récupérer
     * @returns Card[] : la pile correspondante
     */
    getPlayerCardStack(stack: PlayerCardStack): Card[] {
        switch (stack) {
            case "pioche":
                return this.pioche;
            case "hand":
                return this.hand;
            case "defausse":
                return this.defausse;
        }
    }
}

// Piles de cartes du joueur : sa pioche, sa main, sa défausse
type PlayerCardStack = "pioche" | "hand" | "defausse";
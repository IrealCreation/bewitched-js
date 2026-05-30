/**
 * Fichier de script racine
 */

import GameManager from "./scripts/gameManager";
import './styles/style.less';

// class Test {
//     cards: string[] = [];

//     getCards(): string[] {
//         return this.cards;
//     }

//     addToCards(add: string) {
//         this.getCards().push(add);
//     }
// }

// const test = new Test();
// console.log(test.cards);
// test.addToCards("fez");
// console.log(test.cards);

// Quand la page est chargée...
document.addEventListener('DOMContentLoaded', function () {
    // On lance le GameManager (dans un contexte global pour y avoir accès depuis la console en debug)
    globalThis.gameManager = new GameManager();
});
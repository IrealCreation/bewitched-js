/**
 * Fichier de script racine
 */

import GameManager from "./scripts/gameManager";
import './styles/style.less';

// Quand la page est chargée...
document.addEventListener('DOMContentLoaded', function () {
    // On lance le GameManager (dans un contexte global pour y avoir accès depuis la console en debug)
    globalThis.gameManager = new GameManager();
});
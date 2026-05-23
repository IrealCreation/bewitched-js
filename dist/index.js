// Note : le ".js" dans l'import est nécessaire pour ne pas d'avoir de blocage MIME lors de l'exécution du code compilé en JavaScript.
import { GameManager } from "./types.js";

// Test de fonctionnement de la classe GameManager
const gameManager = new GameManager();
gameManager.helloWorld();

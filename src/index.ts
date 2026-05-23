// Note : le ".js" dans l'import est nécessaire pour ne pas d'avoir de blocage MIME lors de l'exécution du code compilé en JavaScript.
import { GameManager, DialogueStorage, Dialogue, DialogueOption, Card, Mood } from "./types";

// Test de fonctionnement de la classe GameManager
const gameManager = new GameManager();
gameManager.helloWorld();
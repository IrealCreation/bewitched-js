import GameManager from "./gameManager";
import { CardModel, Dialogue, DialogueOption } from "../types/types";
import Card from "./card";
// import Card from "./card";

/**
 * Le DisplayManager est responsable de l'affichage du jeu
 */
export default class DisplayManager {

    body: HTMLBodyElement;

    gameContainer: HTMLElement;

    /** Arborescence des éléments HTML :
     *      Les overlays sont des enfants directs du gameContainer qui couvrent l'intégralité de l'écran et interceptent les interactions joueurs
     */

    // --- Affichage des dialogues
    dialogueOverlay: HTMLElement;
    dialoguesContainer: HTMLElement;
    currentDialogueBox: HTMLElement;
    isWriting: boolean = false; // Indique si un texte de dialogue est en train d'être affiché lettre par lettre, pour éviter les interactions du joueur pendant ce temps
    writingDelay: number = 30; // Durée en ms entre l'affichage de chaque lettre d'un texte de dialogue
    writingIndex: number = 0; // Index de la lettre actuellement affichée du texte de dialogue en cours d'affichage
    writingText: string = ""; // Texte de dialogue en cours d'affichage lettre par lettre

    // Options de dialogue
    dialogueOptionsContainer: HTMLElement;
    dialogueOptionsFlexbox: HTMLElement;
    dialogueOptionElements: HTMLElement[] = [];

    // Affichage du deck
    deckContainer: HTMLElement;
    handContainer: HTMLElement;

    // --- Affichage des cartes gagnées
    newCardsOverlay: HTMLElement;
    newCardsFlexbox: HTMLElement;

    constructor() {
        this.body = document.querySelector("body") as HTMLBodyElement;

        // --- Initialise le code HTML du jeu
        this.gameContainer = document.createElement("div");
        this.gameContainer.classList.add("game-container");
        this.body.append(this.gameContainer);

        // --- Dialogues
        // Overlay
        this.dialogueOverlay = document.createElement("div"),
        this.dialogueOverlay.classList.add("dialogue-overlay");
        this.gameContainer.append(this.dialogueOverlay);
        this.dialogueOverlay.addEventListener("click", () => {
            GameManager.instance.dialogueOverlayClick();
        });
        // Container
        this.dialoguesContainer = document.createElement("div");
        this.dialoguesContainer.classList.add("dialogues-container");
        this.dialogueOverlay.append(this.dialoguesContainer);
        // Initialisation de la current dialogue box vide
        this.currentDialogueBox = document.createElement("div");

        // Options de dialogue
        this.dialogueOptionsContainer = document.createElement("div");
        this.dialogueOptionsContainer.classList.add("dialogue-options-container");
        this.dialogueOverlay.append(this.dialogueOptionsContainer);
        this.dialogueOptionsFlexbox = document.createElement("div");
        this.dialogueOptionsFlexbox.classList.add("dialogue-options-flexbox");
        this.dialogueOptionsContainer.append(this.dialogueOptionsFlexbox);

        // Container global du deck du joueur
        this.deckContainer = document.createElement("div");
        this.deckContainer.classList.add("deck-container");
        this.dialogueOverlay.append(this.deckContainer);
        // Main du joueur
        this.handContainer = document.createElement("div");
        this.handContainer.classList.add("hand-container");
        this.deckContainer.append(this.handContainer);

        // --- New cards
        // Overlay
        this.newCardsOverlay = document.createElement("div");
        this.newCardsOverlay.classList.add("new-cards-overlay");
        this.newCardsOverlay.addEventListener("click", () => {
            GameManager.instance.newCardsOverlayClick();
        });
        // Container
        this.gameContainer.append(this.newCardsOverlay);
        const newCardsContainer = document.createElement("div");
        newCardsContainer.classList.add("new-cards-container");
        this.newCardsOverlay.append(newCardsContainer);
        // Flexbox
        this.newCardsFlexbox = document.createElement("div");
        this.newCardsFlexbox.classList.add("new-cards-flexbox");
        newCardsContainer.append(this.newCardsFlexbox);
    }

    /**
     * Lance l'affichage d'un texte de dialogue
     * @param dialogue - Dialogue
     * @param key - number : la key de l'entrée du tableau "texts" du dialogue à afficher
     */
    displayDialogueText(dialogue: Dialogue, key: number): void {
        // Création de la zone de texte du dialogue
        this.currentDialogueBox = document.createElement("div");
        this.currentDialogueBox.classList.add("dialogue-box");
        this.dialoguesContainer.append(this.currentDialogueBox);

        this.isWriting = true;
        this.writingText = dialogue.texts[key];
        this.writeDialogueText();
    }

    /**
     * Affiche un texte de dialogue avec animation lettre par lettre
     */
    writeDialogueText(): void {
        if(this.writingIndex < this.writingText.length) {
            const currentChar: string = this.writingText[this.writingIndex];
            this.currentDialogueBox.textContent += currentChar;

            let delay: number = this.writingDelay;
            if(currentChar === " "){
                delay = this.writingDelay / 2; 
            }
            else if(currentChar === "," || currentChar === ";" || currentChar === ":") {
                delay = this.writingDelay * 5; 
            }
            else if(currentChar === "." || currentChar === "!" || currentChar === "?") {
                if(this.writingText[this.writingIndex + 1] === "." || this.writingText[this.writingIndex + 1] === "!" || this.writingText[this.writingIndex + 1] === "?") {
                    delay = this.writingDelay / 2; // Affichage rapide de la ponctuation multiple (notamment points de suspension)
                }
                else {
                    delay = this.writingDelay * 10; 
                }
            }

            this.writingIndex ++;
            setTimeout(() => {
                this.writeDialogueText();
            }, delay);
        } else {
            // Fin de l'écriture du texte, on reset les variables d'écriture pour le prochain texte et on autorise l'interaction du joueur
            this.isWriting = false;
            this.writingIndex = 0;
            this.writingText = "";
        }    
    }

    /**
     * Achève instantanément l'écriture d'un texte de dialogue
     */
    instantWriteDialogueText(): void {
        const stringLeft = this.writingText.substring(this.writingIndex);
        this.currentDialogueBox.textContent += stringLeft;
        this.isWriting = false;
        this.writingIndex = 0;
        this.writingText = "";
    }

    displayDialogueOptions(options: DialogueOption[]): void {
        this.dialogueOptionElements = [];
        this.dialogueOptionsFlexbox.innerHTML = "";
        
        // On crée le HTML des options de dialogue
        options.forEach((option, index) => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("dialogue-option-box");
            optionElement.id = "dialogue-option-" + index;
            optionElement.textContent = option.text;
            optionElement.addEventListener("click", () => {
                GameManager.instance.dialogueOptionClick(index);
            });
            this.dialogueOptionsFlexbox.append(optionElement);
            this.dialogueOptionElements.push(optionElement);
        });

        // On affiche le container des options
        this.dialogueOptionsContainer.classList.add("active");
        // Gestion de la transition (sans attente)
        this.awaitTransition(this.dialogueOptionsContainer);

        // On affiche le container du deck
        this.deckContainer.classList.add("active");
        // Gestion de la transition (sans attente)
        this.awaitTransition(this.deckContainer);
    }

    changeDialogueOptionStatus(index: number, status: "match" | "matchable" | "selected" | null): void {
        const optionElement = this.dialogueOptionElements[index];
        if(optionElement) {
            // On retire les classes non désirées
            optionElement.classList.remove("match", "matchable", "selected");
            if(status) {
                // On ajoute la classe désirée
                optionElement.classList.add(status);
            }
        }
    }

    async displayNewCards(cards: Card[]): Promise<void> {
        this.newCardsFlexbox.innerHTML = ""; // Reset des cartes déjà affichées
        cards.forEach(card => {
            const cardElement = this.createCard(card);
            this.newCardsFlexbox.append(cardElement);
        });
        this.newCardsOverlay.classList.add("active");
        
        // Gestion de l'animation
        await this.awaitTransition(this.newCardsOverlay);
    }

    async hideNewCards(): Promise<void> {

        this.newCardsOverlay.classList.remove("active");

        // Gestion de l'animation
        await this.awaitTransition(this.newCardsOverlay);
    }

    addCardToHand(card: Card): void {
        const cardElement = this.createCard(card);
        this.handContainer.append(cardElement);
    }

    /**
     * Change le statut d'affichage de la carte dans la main du joueur
     * @param card 
     * @param status - "match" | "matchable" | "nomatch" | "selected" | null (pour retirer tous les autres statuts)
     */
    changeCardStatus(card: Card, status: "match" | "matchable" | "nomatch" | "selected" | null): void {
        const cardElement = document.getElementById("card-" + card.instanceKey);
        if(cardElement) {
            // On retire les classes non désirées
            cardElement?.classList.remove("match", "matchable", "nomatch", "selected");
            if(status) {
                // On ajoute la classe désirée
                cardElement.classList.add(status);
            }
        }
    }

    /**
     * Crée un élément HTML pour une carte donnée
     * @param card 
     * @returns HTMLElement L'élément HTML représentant la carte
     */
    createCard(card: Card): HTMLElement {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        // Name
        const cardName = document.createElement("div");
        cardName.classList.add("name");
        cardName.textContent = card.name;
        cardElement.append(cardName);
        // Moods
        const cardMoods = document.createElement("div");
        cardMoods.classList.add("moods");
        card.moods.forEach(mood => {
            if(cardMoods.textContent) {
                cardMoods.textContent += " - ";
            }
            cardMoods.textContent += mood;
        });
        cardElement.append(cardMoods);
        // Score
        const cardScore = document.createElement("div");
        cardScore.classList.add("score");
        cardScore.textContent = card.score.toString();
        cardElement.append(cardScore);
        // Event listener
        cardElement.addEventListener("click", () => {
            GameManager.instance.cardClick(card);
        });

        cardElement.id = "card-" + card.instanceKey; // ID de l'élément HTML de la carte, pour pouvoir le retrouver facilement dans le DOM

        return cardElement;
    }

    /**
     * Indique au GameManager d'attendre la fin d'une animation pour autoriser les interactions
     * @param element - HTMLElement : l'élément dont on attend la fin de la transition
     * @returns Promise<void> : La promesse qui se résout à la fin de la transition
     */
    async awaitTransition(element: HTMLElement): Promise<void> {
        // On prévient le GameManager qu'une animation est en cours pour bloquer les interactions du joueur pendant ce temps
        GameManager.instance.awaitingForAnimation = true;
        // Attente de la fin de l'animation
        await this.transitionPromise(element);
        // On prévient le GameManager qu'une animation est terminée pour autoriser les interactions du joueur
        GameManager.instance.awaitingForAnimation = false;
    }

    /**
     * Crée une promesse qui se résout à la fin de la transition CSS d'un élément, pour pouvoir synchroniser les changements d'état du jeu avec les animations CSS
     * @param element - HTMLElement : l'élément dont on attend la fin de la transition
     * @returns Promise<void> : La promesse qui se résout à la fin de la transition
     */
    async transitionPromise(element: HTMLElement): Promise<void> {
        return new Promise(resolve => {
            const transitionDuration = parseFloat(getComputedStyle(element).transitionDuration) * 1000;
            // console.log("Transition duration (ms) : ", transitionDuration);
            setTimeout(() => {
                resolve();
            }, transitionDuration);
        });
    }


}
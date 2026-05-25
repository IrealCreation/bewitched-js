import GameManager from "./gameManager";
import { Card, Dialogue } from "../types/types";

/**
 * Le DisplayManager est responsable de l'affichage du jeu
 */
export default class DisplayManager {

    body: HTMLBodyElement;

    gameContainer: HTMLElement;

    // --- Affichage des dialogues
    dialoguesContainer: HTMLElement;
    currentDialogueBox: HTMLElement;
    isWriting: boolean = false; // Indique si un texte de dialogue est en train d'être affiché lettre par lettre, pour éviter les interactions du joueur pendant ce temps
    writingDelay: number = 30; // Durée en ms entre l'affichage de chaque lettre d'un texte de dialogue
    writingIndex: number = 0; // Index de la lettre actuellement affichée du texte de dialogue en cours d'affichage
    writingText: string = ""; // Texte de dialogue en cours d'affichage lettre par lettre

    // --- Affichage des cartes
    newCardsOverlay: HTMLElement;
    newCardsFlexbox: HTMLElement;

    constructor() {
        this.body = document.querySelector("body") as HTMLBodyElement;

        // --- Initialise le code HTML du jeu
        this.gameContainer = document.createElement("div");
        this.gameContainer.classList.add("game-container");
        this.body.append(this.gameContainer);

        // Dialogues
        this.dialoguesContainer = document.createElement("div");
        this.dialoguesContainer.classList.add("dialogues-container");
        this.gameContainer.append(this.dialoguesContainer);

        this.newCardsOverlay = document.createElement("div");
        this.newCardsOverlay.classList.add("new-cards-overlay");
        this.gameContainer.append(this.newCardsOverlay);
        const newCardsContainer = document.createElement("div");
        newCardsContainer.classList.add("new-cards-container");
        this.newCardsOverlay.append(newCardsContainer);
        this.newCardsFlexbox = document.createElement("div");
        this.newCardsFlexbox.classList.add("new-cards-flexbox");
        newCardsContainer.append(this.newCardsFlexbox);

        // Current dialogue box vide (dummy)
        this.currentDialogueBox = document.createElement("div");

        // Pour l'instant on met l'event listener de click sur le dialoguesContainer entier, mais on le rendra plus précis plus tard
        this.dialoguesContainer.addEventListener("click", () => {
            GameManager.instance.dialogueClick();
        });
    }

    /**
     * Lance l'affichage d'un texte de dialogue
     * @param dialogue 
     * @param key 
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

    displayNewCards(cards: Card[]): void {
        this.newCardsFlexbox.innerHTML = ""; // Reset des cartes déjà affichées
        cards.forEach(card => {
            const cardElement = this.createCard(card);
            this.newCardsFlexbox.append(cardElement);
        });
        this.newCardsOverlay.classList.add("active");
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

        return cardElement;
    }


}
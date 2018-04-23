import OpenedCardsQueue from "./CardsQueue.js";
import CardsDeck from "./CardsDeck.js";

export default class GameModel {
    constructor(settings, view) {
        this.cardsToPlay = settings.cards;
        this.openedCards = new OpenedCardsQueue(settings.sequence);
        this.deck = new CardsDeck(
            settings.cards,
            settings.types,
            settings.sequence,
            view);
    }

    isSelectableCard(card) {
        return (card.isClosed && !this.openedCards.blocked);
    }

    selectCard(cardId) {
        const card = this.deck.getCardById(cardId);

        if (!this.isSelectableCard(card)) {
            console.log('you can\'t select this card!', card); // debug mode
            return;
        }

        if (this.openedCards.process(card)) {
            this.cardsToPlay -= this.openedCards.size;
            this.isGameOver();
        }
    }

    isGameOver() {
        const result = this.cardsToPlay === 0 ? true : false;
        if (result) {
            console.log('You win!');
        }
        return result;
    }
}

import OpenedCardsQueue from "./CardsQueue.js";

export default class Game {
    constructor(cards, SEQUENCE_SIZE) {
        this.cards = cards;
        this.cardsToPlay = cards.length;
        this.openedCards = new OpenedCardsQueue(SEQUENCE_SIZE);
    }

    isSelectableCard(card) {
        return (card.isClosed && !this.openedCards.blocked);
    }

    getCardByIndex(cardIndex) {
        return this.cards[cardIndex];
    }

    selectCard(cardIndex) {
        const card = this.getCardByIndex(cardIndex);

        if (card.id !== cardIndex) {
            throw 'wrong cardId';
        }

        if (!this.isSelectableCard(card)) {
            console.log('you can\'t select this card!', card);
            return;
        }

        // this.openedCards.process(card);
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
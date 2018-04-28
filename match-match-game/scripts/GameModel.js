import OpenedCardsQueue from "./CardsQueue.js";
import CardsDeck from "./CardsDeck.js";
import Observable from "./Observable.js"

const ANIMATION_SPEED = 1000; // TODO

export default class GameModel {
    constructor(level) {
        this.cardsToPlay = level.cards;
        this.openedCards = new OpenedCardsQueue(level.sequence);
        this.deck = new CardsDeck(
            level.cards,
            level.types,
            level.sequence);

        this.endGameSubscibers = new Observable();
    }

    onCardSelect(cardId) {
        // debug mode
        console.log('GameModel: process card with id', cardId);

        const card = this.deck.getCardById(cardId);

        if (!this.isSelectableCard(card)) {
            // debug mode
            console.log('you can\'t select this card!', card);

            return;
        }

        if (this.openedCards.process(card)) {
            this.cardsToPlay -= this.openedCards.size;
            this.isGameEnd();
        }
    }

    isSelectableCard(card) {
        return (card.isClosed && !this.openedCards.blocked);
    }

    isGameEnd() {
        if (this.cardsToPlay === 0) {
            // debug mode
            console.log('GameModel: You win!');

            const gameResult = 'TIME xx:xx:xx';
            setTimeout(() =>
                this.endGameSubscibers.notify(gameResult), ANIMATION_SPEED * 2);
        }
    }
}
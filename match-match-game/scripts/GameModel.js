import OpenedCardsQueue from "./CardsQueue.js";
import Card from "./Card.js";

export default class GameModel {
    constructor(settings, view) {
        this.cardsToPlay = settings.cards;
        this.openedCards = new OpenedCardsQueue(settings.sequence);
        this.cards = this.initCards(
            settings.cards,
            settings.types,
            settings.sequence, view);
    }

    initCards(numberOfCards, numberOfTypes, sequenceSize, view) {
        // TODO numberOfCards >= numberOfTypes * n

        if (numberOfCards % 2) {
            throw 'The number of cards must be even';
        }

        if (numberOfCards < numberOfTypes * sequenceSize) {
            throw 'The number of cards can\'t be less than (number of card types * sequence size)';
        }

        if (numberOfCards % (numberOfTypes * sequenceSize)) {
            throw 'The number of cards must be multiple of (number of card types * sequence size)';
        }

        const numberOfCardsOfEachType = (numberOfCards / numberOfTypes);
        let cards = [];
        let id = 0;
        for (let type = 0; type < numberOfTypes; type++) {
            for (let n = 0; n < numberOfCardsOfEachType; n++) {
                cards.push(new Card(id, type, view));
                id += id;
            }
        }

        shuffle(cards);
        cards.map((card, i) => card.id = i);
        return cards;
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

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
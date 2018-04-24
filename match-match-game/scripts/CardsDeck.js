import Card from "./Card.js";

export default class CardDeck {
    constructor(cards, types, sequence, view) {
        this.cards = [];
        this.initCards(cards, types, sequence, view);
        this.shuffle();
    }

    initCards(numberOfCards, numberOfTypes, sequenceSize, view) {
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
        let id = 0;
        for (let type = 0; type < numberOfTypes; type++) {
            for (let n = 0; n < numberOfCardsOfEachType; n++) {
                this.cards.push(new Card(id, type, view));
                id += 1;
            }
        }
    }

    getCardById(cardId) {
        for (let card of this.cards) {
            if (card.id === cardId) {
                return card;
            }
        }
        throw `there is no card with id: ${cardId} in the deck`;
    }

    shuffle() {
        shuffleArray(this.cards);
        this.refillCardIds();
    }

    refillCardIds() {
        this.cards.map((card, i) => card.id = i);
    }

    addCardStateObserver(observer) {
        this.cards.forEach(card => card.stateObservers.subscribe(observer));
    }
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
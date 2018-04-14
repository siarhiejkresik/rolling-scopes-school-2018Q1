const GRID_SIZE = 4;
const NUMBER_OF_CARD_TYPES = 2;
const SEQUENCE_SIZE = 2;

class Card {
    constructor(type, listener) {
        this.type = type;
        this._state = STATE.CLOSED;
        this._listener = listener;
    }

    get isClosed() {
        return this._state === STATE.CLOSED;
    }

    open() {
        this._state = STATE.OPENED;
        // this._listener.notify(ACTION.OPEN, this);
    }

    close() {
        this._state = STATE.CLOSED;
        // this._listener.notify(ACTION.CLOSE, this);
    }

    disable() {
        this._state = STATE.DISABLED;
        // this._listener.notify(ACTION.DISABLE, this);
    }
}

const STATE = Object.freeze({
    OPENED: 'OPENED',
    CLOSED: 'CLOSED',
    DISABLED: 'DISABLED'
})

const ACTION = {
    OPEN: 'OPENE',
    CLOSE: 'CLOSE',
    DISABLE: 'DISABLE'
}

class OpenedCardsQueue {
    constructor(size) {
        this._size = size;
        this._cards = [];
    }

    get isEmpty() {
        return !!this._cards.length;
    }

    get isFull() {
        return this._size === this._cards.length;
    }

    get isOfDifferentTypes() {
        // TODO this._cards = [] ?
        // TODO move type checking to card interface
        // TODO check only with the first card
        const type = this._cards[0].type;
        return !this._cards.every(card => card.type === type);
    }

    process() {
        if (this.isOfDifferentTypes) {
            this.closeAll();
            this.clear();
            return;
        }

        if (this.isFull) {
            this.disableAll();
            this.clear();
            return true;
        }
    }

    add(card) {
        card.open();
        this._cards.push(card);
    }

    clear() {
        this._cards = [];
    }

    disableAll() {
        this._cards.map(card => card.disable())
    }

    closeAll() {
        this._cards.map(card => card.close())
    }
}

class Game {
    constructor(cards) {
        this.cards = cards;
        this.cardsToPlay = cards.length;
        // this.openedCards = null;
        this.openedCards = new OpenedCardsQueue(SEQUENCE_SIZE);
    }

    isSelectableCard(card) {
        return card.isClosed;
    }

    getCardByIndex(cardIndex) {
        return this.cards[cardIndex];
    }

    selectCard(cardIndex) {
        const card = this.getCardByIndex(cardIndex);

        if (!this.isSelectableCard(card)) {
            console.log('you can\'t select this card!', card);
            return;
        }

        this.openedCards.add(card);
        if (this.openedCards.process()) {
            this.cardsToPlay -= SEQUENCE_SIZE;
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


const grid = drawGrid(GRID_SIZE);
grid.addEventListener('click', processEvent);
const deck = initCards(GRID_SIZE, NUMBER_OF_CARD_TYPES, SEQUENCE_SIZE);
shuffle(deck);
const game = new Game(deck);
// const grid = document.querySelector('#grid');


/**
 * Make cards.
 * @param {int} numberOfCards The total number of cards in the game
 * @param {int} numberOfTypes The number of different types of cards
 * @param {int} sequenceSize The number of cards of the same type which one must open in a row before they disappear
 */
function initCards(numberOfCards, numberOfTypes, sequenceSize) {
    // TODO numberOfCards must be even
    // TODO numberOfPairs must be even
    // TODO numberOfCards >= numberOfTypes * n

    if (numberOfCards < numberOfTypes * sequenceSize) {
        throw 'The number of cards can\'t be less than (number of card types * sequence size)';
    }

    if (numberOfCards % (numberOfTypes * sequenceSize)) {
        throw 'The number of cards must by multiple of (number of card types * sequence size)';
    }

    const numberOfEachTypeCard = (numberOfCards / numberOfTypes);
    let cards = [];
    for (let type = 0; type < numberOfTypes; type++) {
        for (let n = 0; n < numberOfEachTypeCard; n++) {
            cards.push(new Card(type));
        }
    }
    return cards;

}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawGrid(size) {
    const grid = document.createElement('section')
    grid.id = 'grid'
    grid.innerHTML = Array(size)
        .fill()
        .map((x, i) => `<div id="${i}" class="card">${i}</div>`)
        .join('\n');
    document.body.appendChild(grid);
    return grid;
}

function processEvent(e) {
    const cardIndex = parseInt(e.target.id, 10);
    console.log('CLICKED', cardIndex)
    if (isNaN(cardIndex)) {
        return;
    }
    game.selectCard(cardIndex);
    console.log(game.cards.map(c => `${c._state} ${c.type}`));
    console.log('-----------------')
}
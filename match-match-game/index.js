import Card from "./scripts/Card.js";
import OpenedCardsQueue from "./scripts/CardsQueue.js"

const GRID_SIZE = 4;
const NUMBER_OF_CARD_TYPES = 2;
const SEQUENCE_SIZE = 2;


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

    const numberOfCardsOfEachType = (numberOfCards / numberOfTypes);
    let cards = [];
    let id = 0;
    for (let type = 0; type < numberOfTypes; type++) {
        for (let n = 0; n < numberOfCardsOfEachType; n++) {
            cards.push(new Card(id, type, grid));
            id += id;
        }
    }

    // shuffle(cards);
    cards.map((card, i) => card.id = i);
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
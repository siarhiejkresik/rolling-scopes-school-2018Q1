import Card from "./scripts/Card.js";
import GameView from "./scripts/GameView.js";
import Game from "./scripts/Game.js";

const GRID_SIZE = 4;
const NUMBER_OF_CARD_TYPES = 2;
const SEQUENCE_SIZE = 2;


grid.addCardListener('click', processEvent);
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
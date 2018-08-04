import { SET_CARD_STATE, CARD_STATES, GENERATE_CARD_DECK } from '../actions';
import { PREFERENCES } from '../constants/preferences';

const CARDS = [
  {
    id: 1,
    type: 0,
    state: CARD_STATES.CLOSED,
  },
  {
    id: 2,
    type: 0,
    state: CARD_STATES.CLOSED,
  },
  {
    id: 3,
    type: 1,
    state: CARD_STATES.CLOSED,
  },
  {
    id: 4,
    type: 1,
    state: CARD_STATES.CLOSED,
  },
];

const generateCardDeck = ({ cards, types }) => {
  const cardDeck = [];
  const initialState = CARD_STATES.CLOSED;
  const numberOfCardsOfEachType = cards / types;
  let id = 0;
  for (let type = 0; type < types; type++) {
    for (let n = 0; n < numberOfCardsOfEachType; n++) {
      cardDeck.push({ id, type, state: initialState });
      id += 1;
    }
  }
  return CARDS;
  return cardDeck;
};

const shuffleArray = arr => arr.sort(() => 0.5 - Math.random());

export default (state = [], action) => {
  switch (action.type) {
    case GENERATE_CARD_DECK: {
      const cardDeck = generateCardDeck(PREFERENCES[action.difficulty]);
      shuffleArray(cardDeck);
      return cardDeck;
    }
    case SET_CARD_STATE: {
      let hasCardWithId = false;

      const newState = state.map((card) => {
        if (card.id === action.id) {
          hasCardWithId = true;
          return Object.assign({}, card, { state: action.state });
        }
        return card;
      });

      if (!hasCardWithId) {
        throw new Error(`no card with id=${action.id}`);
      }

      return newState;
    }
    default:
      return state;
  }
};

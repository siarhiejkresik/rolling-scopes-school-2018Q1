import { SET_CARD_STATE, CARD_STATES, GENERATE_CARD_DECK } from '../actions';
import { PREFERENCES } from '../constants/preferences';

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
  return cardDeck;
};

const shuffleArray = arr => arr.sort(() => 0.5 - Math.random());

export default (state = [], action) => {
  switch (action.type) {
    case GENERATE_CARD_DECK: {
      const preferences = PREFERENCES[action.difficulty];
      const cardDeck = generateCardDeck(preferences);
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

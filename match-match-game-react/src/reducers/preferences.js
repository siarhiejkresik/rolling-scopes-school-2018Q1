import { SET_DIFFICULTY, SET_CARD_BACK } from '../actions';

import { DIFFICULTY } from '../constants/preferences';
import CARD_BACKS from '../constants/card-backs';

const initialState = {
  difficulty: DIFFICULTY.KIDS,
  cardBack: CARD_BACKS[0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return Object.assign({}, state, { difficulty: action.difficulty });
    case SET_CARD_BACK:
      return Object.assign({}, state, { cardBack: action.cardBack });
    default:
      return state;
  }
};

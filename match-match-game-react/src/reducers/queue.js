import {
  ADD_CARD_TO_QUEUE,
  CLEAR_QUEUE,
  BLOCK_QUEUE,
  UNBLOCK_QUEUE,
} from '../actions';

const initialState = {
  cardIds: [],
  isBlocked: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_QUEUE: {
      const { id } = action;
      if (state.cardIds.includes(action.id)) {
        throw new Error(`the card queue already has a card with id=${id}`);
      }
      return Object.assign({}, state, { cardIds: state.cardIds.concat(id) });
    }
    case CLEAR_QUEUE:
      return Object.assign({}, state, { cardIds: [] });
    case BLOCK_QUEUE:
      return Object.assign({}, state, { isBlocked: true });
    case UNBLOCK_QUEUE:
      return Object.assign({}, state, { isBlocked: false });
    default:
      return state;
  }
};

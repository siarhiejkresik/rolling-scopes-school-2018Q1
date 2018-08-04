import {
  ADD_CARD_TO_QUEUE,
  CLEAR_QUEUE,
  BLOCK_QUEUE,
  UNBLOCK_QUEUE,
  SET_MAX_QUEUE_SIZE,
} from '../actions';

const initialState = {
  cardIds: [],
  isBlocked: false,
  maxSize: 2,
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
    case SET_MAX_QUEUE_SIZE:
      return Object.assign({}, state, { maxSize: action.maxSize });
    default:
      return state;
  }
};

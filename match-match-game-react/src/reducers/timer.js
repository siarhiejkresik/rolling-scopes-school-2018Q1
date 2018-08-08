import { START_TIMER, TICK_TIMER } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        offset: 0,
        startTime: Date.now(),
      };
    case TICK_TIMER:
      return Object.assign({}, state, { offset: Date.now() - state.startTime });
    default:
      return state;
  }
};

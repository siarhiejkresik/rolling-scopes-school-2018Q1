import { START_TIMER, STOP_TIMER, TICK_TIMER } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        offset: 0,
        startTime: Date.now(),
      };
    case STOP_TIMER:
      return Object.assign({}, state, { inverval: null });
    case TICK_TIMER:
      return Object.assign({}, state, { offset: Date.now() - state.startTime });
    default:
      return state;
  }
};

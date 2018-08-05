import { START_TIMER, TICK_TIMER, STOP_TIMER } from '../actions';

const TICK_INTERVAL = 1000;

let interval;

export default store => next => (action) => {
  if (action.type === START_TIMER) {
    interval = setInterval(() => store.dispatch({ type: TICK_TIMER }), TICK_INTERVAL);
  } else if (action.type === STOP_TIMER) {
    clearInterval(interval);
  }
  next(action);
};

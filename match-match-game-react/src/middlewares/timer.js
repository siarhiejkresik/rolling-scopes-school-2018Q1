import { START_TIMER, STOP_TIMER, tickTimer } from '../actions';

const TICK_INTERVAL = 1000;

let interval;

export default store => next => (action) => {
  if (action.type === START_TIMER) {
    interval = setInterval(() => store.dispatch(tickTimer()), TICK_INTERVAL);
  } else if (action.type === STOP_TIMER) {
    clearInterval(interval);
  }
  next(action);
};

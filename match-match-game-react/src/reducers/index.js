import { combineReducers } from 'redux';

import cards from './cards';
import preferences from './preferences';
import queue from './queue';
import scores from './scores';
import timer from './timer';
import user from './user';

const rootReducer = combineReducers({
  cards,
  preferences,
  queue,
  scores,
  timer,
  user,
});

export default rootReducer;

import { combineReducers } from 'redux';

import cards from './cards';
import queue from './queue';
import preferences from './preferences';
import user from './user';
import scores from './scores';

const rootReducer = combineReducers({
  cards,
  queue,
  preferences,
  scores,
  user,
});

export default rootReducer;

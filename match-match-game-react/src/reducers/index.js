import { combineReducers } from 'redux';

import cards from './cards';
import queue from './queue';
import preferences from './preferences';
import user from './user';

const rootReducer = combineReducers({
  cards,
  queue,
  preferences,
  user,
});

export default rootReducer;

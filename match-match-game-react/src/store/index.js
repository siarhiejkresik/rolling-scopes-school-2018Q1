import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import timer from '../middlewares/timer';

import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, timer),
);

export default store;

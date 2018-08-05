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

// store.dispatch((dispatch) => {
//   dispatch(actions.blockQueue());
//   dispatch(actions.unBlockQueue());
// });

// console.log(store.getState());
// store.subscribe(() => console.log('store changed:\n', store.getState()));

// store.dispatch(addCardToQueue({ id: 2 }));
// store.dispatch(clearQueue());
// store.dispatch(addCardToQueue({ id: 1 }));
// store.dispatch(addCardToQueue({ id: 3 }));
// store.dispatch(blockQueue());
// store.dispatch(unBlockQueue());
// store.dispatch(setMaxQueueSize(3));

// store.dispatch(setCardState({ id: 1, state: CARD_STATES.DISABLED }));
// store.dispatch(setCardState({ id: 2, state: CARD_STATES.CLOSED }));

// store.dispatch(actions.setDifficulty('HARD'));
// store.dispatch(actions.setCardBack('circle'));

export default store;

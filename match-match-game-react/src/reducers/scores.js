import sortBy from 'lodash.sortby';

import { RECEIVE_SCORES, CLEAR_SCORES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SCORES:
      return sortBy(action.scores, ['score', 'updatedAt', 'username']);
    case CLEAR_SCORES:
      return [];
    default:
      return state;
  }
};

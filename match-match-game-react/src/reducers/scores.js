import sortBy from 'lodash.sortby';

import { RECEIVE_SCORES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SCORES:
      return sortBy(action.scores, ['score', 'updatedAt', 'username']);
    default:
      return state;
  }
};

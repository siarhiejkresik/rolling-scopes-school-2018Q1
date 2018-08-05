import { SET_USER_NAME, SET_USER_EMAIL, SET_USER_SCORE } from '../actions';

const initialState = {
  username: '',
  email: '',
  score: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, { username: action.username });
    case SET_USER_EMAIL:
      return Object.assign({}, state, { email: action.email });
    case SET_USER_SCORE:
      return Object.assign({}, state, { score: action.score });
    default:
      return state;
  }
};

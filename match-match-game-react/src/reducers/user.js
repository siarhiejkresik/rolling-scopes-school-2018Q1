import { SET_USER_NAME, SET_USER_EMAIL } from '../actions';

const initialState = {
  username: '',
  email: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, { username: action.username });
    case SET_USER_EMAIL:
      return Object.assign({}, state, { email: action.email });
    default:
      return state;
  }
};

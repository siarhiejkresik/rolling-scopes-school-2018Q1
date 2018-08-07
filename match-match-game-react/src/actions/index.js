import { GET_LINK, POST_LINK } from '../constants/api-endpoints';

export const SET_CARD_STATE = 'SET_CARD_STATE';

export const ADD_CARD_TO_QUEUE = 'ADD_CARD_TO_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const BLOCK_QUEUE = 'BLOCK_QUEUE';
export const UNBLOCK_QUEUE = 'UNBLOCK_QUEUE';

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_CARD_BACK = 'SET_CARD_BACK';
export const GENERATE_CARD_DECK = 'GENERATE_CARD_DECK';

export const RECEIVE_SCORES = 'RECEIVE_SCORES';
export const POST_SCORE = 'POST_SCORE';

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_SCORE = 'SET_USER_SCORE';

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK_TIMER = 'TICK_TIMER';

export const setCardState = ({ id, state }) => ({
  type: SET_CARD_STATE,
  id,
  state,
});

export const addCardToQueue = ({ id }) => ({
  type: ADD_CARD_TO_QUEUE,
  id,
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE,
});

export const blockQueue = () => ({
  type: BLOCK_QUEUE,
});

export const unBlockQueue = () => ({
  type: UNBLOCK_QUEUE,
});

export const changeQueueCardsState = cardState => (dispatch, getState) => {
  const { cardIds } = getState().queue;
  cardIds.map(id => dispatch(setCardState({ id, state: cardState })));
};

export const setDifficulty = difficulty => ({
  type: SET_DIFFICULTY,
  difficulty,
});

export const setCardBack = cardBack => ({
  type: SET_CARD_BACK,
  cardBack,
});

export const generateCardDeck = difficulty => ({
  type: GENERATE_CARD_DECK,
  difficulty,
});

export const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores,
});

export const fetchScoreboard = () => (dispatch) => {
  fetch(GET_LINK)
    .then(response => response.json())
    .catch(error => console.error('Error in fetchScoreboard:', error))
    .then(json => dispatch(receiveScores(json.result)));
};

export const postScore = data => ({
  type: POST_SCORE,
  data,
});

export const sendScoreResult = data => (dispatch) => {
  fetch(POST_LINK, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.error('Error in sendScoreResult:', error))
    .then((response) => {
      console.log(response);
      dispatch(postScore(response));
    });
};

export const setUserName = username => ({
  type: SET_USER_NAME,
  username,
});

export const setUserEmail = email => ({
  type: SET_USER_EMAIL,
  email,
});

export const setUserScore = score => ({
  type: SET_USER_SCORE,
  score,
});

export const tickTimer = () => ({
  type: TICK_TIMER,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

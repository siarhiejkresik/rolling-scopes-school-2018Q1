import { GET_LINK, POST_LINK } from '../constants/api-endpoints';
import CARD_STATE from '../constants/card-states';
import { QUEUE_ANIMATION_DURATION } from '../constants/animations';

import {
  isQueueFull, isQueueOfDifferentTypes, isAllCardsDisabled, postData,
} from '../selectors';

import history from '../history';
import { wait } from '../scripts/utils';

export const SET_CARD_STATE = 'SET_CARD_STATE';

export const ADD_CARD_TO_QUEUE = 'ADD_CARD_TO_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const BLOCK_QUEUE = 'BLOCK_QUEUE';
export const UNBLOCK_QUEUE = 'UNBLOCK_QUEUE';

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_CARD_BACK = 'SET_CARD_BACK';
export const GENERATE_CARD_DECK = 'GENERATE_CARD_DECK';

export const CLEAR_SCORES = 'CLEAR_SCORES';
export const RECEIVE_SCORES = 'RECEIVE_SCORES';
export const POST_SCORE = 'POST_SCORE';

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK_TIMER = 'TICK_TIMER';

export const tickTimer = () => ({
  type: TICK_TIMER,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const setCardState = ({ id, state }) => ({
  type: SET_CARD_STATE,
  id,
  state,
});

export const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores,
});

export const clearScores = () => ({
  type: CLEAR_SCORES,
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

export const finalizeQueue = cardState => async (dispatch) => {
  await wait(QUEUE_ANIMATION_DURATION);
  dispatch(changeQueueCardsState(cardState));
  dispatch(clearQueue());
  dispatch(unBlockQueue());
};

export const processQueue = id => async (dispatch, getState) => {
  dispatch(blockQueue());
  dispatch(setCardState({ id, state: CARD_STATE.OPENED }));
  dispatch(addCardToQueue({ id }));

  if (isQueueOfDifferentTypes(getState())) {
    await dispatch(finalizeQueue(CARD_STATE.CLOSED));
    return;
  }
  if (isQueueFull(getState())) {
    await dispatch(finalizeQueue(CARD_STATE.DISABLED));
    if (isAllCardsDisabled(getState())) {
      dispatch(stopTimer());
      await wait(QUEUE_ANIMATION_DURATION);
      const data = postData(getState());
      dispatch(sendScoreResult(data));
      dispatch(clearScores());
      dispatch(fetchScoreboard());
      history.push('/result');
    }
    return;
  }

  dispatch(unBlockQueue());
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

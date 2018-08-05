export const CARD_STATES = {
  OPENED: 'OPENED',
  CLOSED: 'CLOSED',
  DISABLED: 'DISABLED',
};

export const SET_CARD_STATE = 'SET_CARD_STATE';

export const ADD_CARD_TO_QUEUE = 'ADD_CARD_TO_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const BLOCK_QUEUE = 'BLOCK_QUEUE';
export const UNBLOCK_QUEUE = 'UNBLOCK_QUEUE';
export const SET_MAX_QUEUE_SIZE = 'SET_MAX_QUEUE_SIZE';
export const CLOSE_CARDS = 'CLOSE_CARDS';

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_CARD_BACK = 'SET_CARD_BACK';
export const GENERATE_CARD_DECK = 'GENERATE_CARD_DECK';

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_SCORE = 'SET_USER_SCORE';

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

export const setMaxQueueSize = maxSize => ({ type: SET_MAX_QUEUE_SIZE, maxSize });

export const closeCards = () => ({ type: CLOSE_CARDS });

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

import { createSelector } from 'reselect';

import CARD_STATES from '../constants/card-states';
import { PREFERENCES } from '../constants/preferences';

const getCards = state => state.cards;
const getQueue = state => state.queue;
const queueMaxSize = state => PREFERENCES[state.preferences.difficulty].sequence;

export const queueCurrSize = createSelector([getQueue], queue => queue.cardIds.length);

export const isQueueFull = createSelector([queueMaxSize, queueCurrSize], (maxSize, currSize) => {
  if (currSize > maxSize) {
    throw new Error("the cards queue size can't be greater than the max size");
  }
  return currSize === maxSize;
});

export const isQueueOfDifferentTypes = createSelector(
  [getCards, getQueue, queueCurrSize],
  (cards, queue, currSize) => {
    if (currSize < 2) {
      return false;
    }
    const queueCards = cards.filter(card => queue.cardIds.includes(card.id));
    const { type } = queueCards[0];
    return !queueCards.every(card => card.type === type);
  },
);

export const postData = state => ({
  username: state.user.username,
  email: state.user.email,
  score: state.timer.offset,
});

export const isAllCardsDisabled = createSelector([getCards], cards => cards.every(card => card.state === CARD_STATES.DISABLED));

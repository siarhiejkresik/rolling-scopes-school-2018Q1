export const DIFFICULTY = {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD',
};

export const PREFERENCES = {
  [DIFFICULTY.EASY]: {
    cards: 16,
    types: 8,
    sequence: 2,
  },
  [DIFFICULTY.NORMAL]: {
    cards: 24,
    types: 12,
    sequence: 2,
  },
  [DIFFICULTY.HARD]: {
    cards: 24,
    types: 8,
    sequence: 3,
  },
};

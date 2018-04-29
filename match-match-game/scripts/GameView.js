import { CARD_STATE, THEMES } from './constants.js';
import { timeMSToMMSS } from './utils.js';

export default class GameView {
  constructor(size, cardBack = 0) {
    this.time = document.querySelector('.time');
    this.grid = document.querySelector('.grid');
    this.renderGrid(size, cardBack);
  }

  renderGrid(size, cardBack) {
    // add cards to grid
    for (let i = 0; i < size; i++) {
      let card = cardTemplate(THEMES[cardBack]);
      card = document.createRange().createContextualFragment(card);
      this.grid.appendChild(card);
      this.grid.lastChild.id = `card-${i}`;
    }
  }

  updateCardView(id, state, type) {
    // debug mode
    console.log('GameView:  notify from GameModel:', id, state);

    const selector = `#card-${id}`;
    let card = this.grid.querySelector(selector);

    if (state === CARD_STATE.OPENED) {
      card.querySelector('.front').innerHTML = type;
      this.openCard(card);
    } else if (state === CARD_STATE.CLOSED) {
      card.querySelector('.front').innerHTML = null;
      this.closeCard(card);
    } else if (state === CARD_STATE.DISABLED) {
      this.disableCard(card);
    } else {
      throw new Error('unknown card state!');
    }
  }

  updateTime(time) {
    this.time.innerHTML = timeMSToMMSS(time);
  }

  openCard(card) {
    card.classList.add('opened');
  }

  closeCard(card) {
    card.classList.remove('opened');
  }

  disableCard(card) {
    card.classList.add('disabled');
  }

  cleanUp() {
    this.grid.innerHTML = null; // removes all cards
    this.grid.outerHTML = this.grid.outerHTML; // removes all listeners
  }
}

const cardTemplate = cardBack => {
  return `
<div class="card">
    <div class="content">
        <div class="face back ${cardBack}"></div>
        <div class="face front"></div>
    </div>
</div>`;
};

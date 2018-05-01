import {
  CARD_THEMES,
  CONTROLS,
  DIFFICULTY_BUTTONS,
  ELEMENTS,
  LOGIN_FORM,
  STATES,
  VIEWS
} from './constants.js';

import { timeMSToMMSS } from './utils.js';

export default class AppView {
  constructor() {
    // buttons
    this.difficultyButtons = document.querySelectorAll(Object.values(DIFFICULTY_BUTTONS));
    this.startButtons = document.querySelectorAll(CONTROLS.PLAY);
    this.logoutButton = document.querySelector(CONTROLS.LOGOUT);
    this.nextButton = document.querySelector(CONTROLS.NEXT);
    this.toMenuButton = document.querySelector(CONTROLS.RETURN);
    this.exitToMenuButton = document.querySelector(CONTROLS.EXIT);
    // area for card theme selection
    this.carousel = document.querySelector(ELEMENTS.CAROUSEL);
    // login form
    this.loginForm = document.querySelector(LOGIN_FORM);

    // TODO move to AppController?
    // listeners
    this.nextButton.addEventListener('click', this.showLogIn.bind(this));
    this.toMenuButton.addEventListener('click', this.showMenu.bind(this));

    this.setUp();
  }

  setUp() {
    // render card theme carousel
    CARD_THEMES.forEach(cardTheme => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.classList.add(cardTheme);
      this.carousel.appendChild(card);
    });
  }

  showWelcome() {
    this._hideAllViews();
    this._showView(VIEWS.WELCOME);
  }

  showLogIn() {
    this._hideAllViews();
    this._showView(VIEWS.LOGIN);
  }

  showMenu() {
    this._hideAllViews();
    this._showView(VIEWS.MENU);
  }

  showGame() {
    this._hideAllViews();
    this._showView(VIEWS.GAME);
  }

  showGameEnd(gameResult, place) {
    this._hideAllViews();
    this._showView(VIEWS.RESULT);
    const view = document.querySelector(VIEWS.RESULT);
    view.querySelector(ELEMENTS.TIME).innerHTML = timeMSToMMSS(gameResult);
    if (place) {
      view.querySelector(ELEMENTS.PLACE).innerHTML = place;
      view.querySelector(ELEMENTS.RECORD).classList.remove(STATES.HIDDEN);
    } else {
      view.querySelector(ELEMENTS.RECORD).classList.add(STATES.HIDDEN);
    }
  }

  toggleDifficulty(difficulty) {
    // toggle buttons
    this.difficultyButtons.forEach(button => {
      if (button.classList.contains(difficulty)) {
        button.classList.add(STATES.SELECTED);
      } else {
        button.classList.remove(STATES.SELECTED);
      }
    });

    // set difficulty value
    document
      .querySelectorAll(ELEMENTS.DIFFICULTY)
      .forEach(element => (element.innerHTML = difficulty));
  }

  toggleCardTheme(cardThemeIndex) {
    const cards = this.carousel.querySelectorAll(ELEMENTS.CARD);
    cards.forEach((card, i) => {
      if (i === cardThemeIndex) {
        card.classList.add(STATES.SELECTED);
      } else {
        card.classList.remove(STATES.SELECTED);
      }
    });
  }

  setPlayerNames(player) {
    const firstnames = document.querySelectorAll(ELEMENTS.FIRSTNAME);
    const lastnames = document.querySelectorAll(ELEMENTS.LASTNAME);
    firstnames.forEach(node => (node.innerHTML = player.firstname));
    lastnames.forEach(node => (node.innerHTML = player.lastname));
  }

  unSetPlayerNames() {
    this.setPlayerNames({
      firstname: '',
      lastname: ''
    });
  }

  _hideAllViews() {
    for (let view of Object.values(VIEWS)) {
      document.querySelector(view).classList.add(STATES.HIDDEN);
    }
  }

  _showView(view) {
    document.querySelector(view).classList.remove(STATES.HIDDEN);
  }
}

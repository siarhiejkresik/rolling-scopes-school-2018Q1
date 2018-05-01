import AppView from './AppView.js';
import AppModel from './AppModel.js';
import GameController from './GameController.js';
import { DIFFICULTIES, LEVELS, PLAYER, ELEMENTS } from './constants.js';

export default class AppController {
  constructor() {
    this.view = new AppView();
    this.model = new AppModel();
    this.game = null;
    this.setUp();
  }

  setUp() {
    // add listeners
    this.view.startButtons.forEach(btn => btn.addEventListener('click', this.onPlay.bind(this)));
    this.view.difficultyButtons.forEach(btn =>
      btn.addEventListener('click', this.onDifficultySet.bind(this))
    );
    this.view.carousel.addEventListener('click', this.onCardThemeSet.bind(this));
    this.view.loginForm.addEventListener('submit', this.onLogIn.bind(this));
    this.view.logoutButton.addEventListener('click', this.onLogOut.bind(this));
  }

  run() {
    if (!this.model.player) {
      this.view.showWelcome();
    } else {
      this.view.setPlayerNames(this.model.player);
      this.view.toggleDifficulty(this.model.difficulty);
      this.view.toggleCardTheme(this.model.cardTheme);
      this.view.showMenu();
    }
  }

  onLogIn(e) {
    e.preventDefault(); // prevent form action
    const player_info = [
      document.getElementById(PLAYER.FIRSTNAME).value,
      document.getElementById(PLAYER.LASTNAME).value,
      document.getElementById(PLAYER.EMAIL).value
    ];
    this.model.setPlayer(player_info);
    this.view.setPlayerNames(this.model.player); // TODO observer
    this.view.toggleDifficulty(this.model.difficulty);
    this.view.toggleCardTheme(this.model.cardTheme);
    this.view.showMenu();
  }

  onLogOut() {
    this.model.unSetPlayer();
    this.view.unSetPlayerNames();
    this.view.toggleDifficulty(this.model.difficulty);
    this.view.toggleCardTheme(this.model.cardTheme);
    this.view.showWelcome();
  }

  onGameEnd(gameResult) {
    this.game = null;
    const place = this.model.checkForRecord(gameResult);
    this.view.showGameEnd(gameResult, place);
  }

  onPlay() {
    const settings = {
      level: LEVELS[this.model.difficulty],
      theme: this.model.cardTheme
    };
    this.game = new GameController(settings, this.onGameEnd.bind(this));
    this.view.showGame();
  }

  }

  onDifficultySet(e) {
    if (e.target.classList.contains(this.model.difficulty)) {
      return;
    }

    // TODO rewrite
    let difficulty;
    for (let difficulty_ of Object.values(DIFFICULTIES)) {
      if (e.target.classList.contains(difficulty_)) {
        difficulty = difficulty_;
        break;
      }
    }
    this.model.setDifficulty(difficulty);
    this.view.toggleDifficulty(difficulty);
  }

  onCardThemeSet(e) {
    const card = e.target.closest(ELEMENTS.CARD);
    if (!card) {
      return;
    }
    const cards = e.currentTarget.querySelectorAll(ELEMENTS.CARD);
    const cardThemeIndex = [...cards].indexOf(card);
    this.model.setCardTheme(cardThemeIndex);
    this.view.toggleCardTheme(cardThemeIndex);
  }
}

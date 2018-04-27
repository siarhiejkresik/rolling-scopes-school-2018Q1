import AppView from "./AppView.js";
import AppData from "./AppData.js";
import GameController from "./GameController.js";
import {
    DIFFICULTIES
} from "./constants.js";


export default class App {
    constructor(gameSettings) {
        this.gameSettings = gameSettings;
        this.gameData = new AppData();
        this.view = new AppView();
        this.player = null;
        this.difficulty = DIFFICULTIES.EASY;
     
        this.initSetUp();
    }

    initSetUp() {
        [...this.view.startButtons].forEach(
            btn => btn.addEventListener('click', this.onPlay.bind(this)));
        [...this.view.difficultyButtons].forEach(
            btn => btn.addEventListener('click', this.onDifficultySet.bind(this)));
        this.view.logoutButton.addEventListener('click', this.onLogOut.bind(this));
    }

    run() {
        this.player = this.gameData.getLastPlayer();
        if (!this.player) {
            throw 'not implemented';
        }
        this.view.setPlayerNames(this.player);
        this.view.showMenu(this.player);
    }

    onLogIn() {}

    onLogOut() {
        this.player = null;
        this.gameData.clearLastPlayer();
        this.view.unSetPlayerNames();
        this.view.showWelcome();
    }

    onGameEnd(gameResult) {
        this.view.showGameEnd(gameResult, this.player);
    }

    onPlay() {
        this.view.showGame();
        new GameController(this.gameSettings[this.difficulty], this.onGameEnd.bind(this));
    }

    onDifficultySet(e) {
        if (e.target.classList.contains(this.difficulty)) return;
        for (let difficulty of Object.values(DIFFICULTIES)) {
            if (e.target.classList.contains(difficulty)) {
                this.difficulty = difficulty;
                break;
            }
        }
        this.player.difficulty = this.difficulty;
        this.gameData.saveToStorage();
        this.view.toggleDifficulty(this.difficulty);

    }
}
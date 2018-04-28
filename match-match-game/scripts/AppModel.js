import AppData from "./AppData.js";
import {
    DIFFICULTIES
} from "./constants.js";

// TODO refactor
export default class AppModel {
    constructor(gameSettings) {
        this.gameSettings = gameSettings;
        this.db = new AppData();
        this.player = null;
        this.difficulty = null;
        this.back = null;
        this.setUp();
    }

    setUp() {
        this.resetToDefault();
        const player = this.db.getLastPlayer();
        if (!player) {
            return;
        }
        this.setPlayer([player.firstname, player.lastname]);

    }

    resetToDefault() {
        this.player = null;
        this.difficulty = DIFFICULTIES.EASY;
        this.back = '.circle';
    }

    setPlayer(player_info) {
        // get a player from database or create a new one
        let player = this.db.getPlayerByName(...player_info);
        if (!player) {
            player = this.db.addNewPlayer(...player_info);
        }

        // remember a player if that is not an anonimous
        if (!this.isAnonimousPlayer(player)) {
            this.db.setLastPlayer(player);
        }

        this.player = player;
        // set player's preferences to the model
        if (this.player.difficulty) {
            this.difficulty = this.player.difficulty;
        }
        if (this.player.back) {
            this.back = this.player.back;
        }
    }

    unSetPlayer() {
        this.db.clearLastPlayer();
        this.resetToDefault();
    }

    setDifficulty(difficulty) {
        if (!this.isAnonimousPlayer(this.player)) {
            this.player.difficulty = difficulty;
            this.db.saveToStorage();
        }
        this.difficulty = difficulty;
    }

    setBack(back) {
        if (!this.isAnonimousPlayer(this.player)) {
            this.player.back = back;
            this.db.saveToStorage();
        }
        this.back = back;
    }

    isAnonimousPlayer(player) {
        return (!player.firstname && !player.lastname);
    }
}
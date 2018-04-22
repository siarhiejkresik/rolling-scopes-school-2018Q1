import GameController from "./scripts/GameController.js";

const gameSettings = {
    cards: 36,
    types: 6,
    sequence: 2,
}

const game = new GameController(gameSettings);

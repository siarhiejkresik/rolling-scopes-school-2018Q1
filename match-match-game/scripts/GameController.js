import GameView from "./GameView.js";
import GameModel from "./GameModel.js";


export default class GameController {
    constructor(settings) {
        this.view = new GameView(settings.cards);
        this.view.addListener('click', this.processEvent, this);
        this.model = new GameModel(settings, this.view);
    }

    processEvent(e) {
        if (!e.target.closest('.card')) {
            return;
        }

        let cardId = e.target.closest('.card').id;
        cardId = cardId.split('-').slice(-1)[0];
        cardId = parseInt(cardId, 10);

        console.log('CLICKED id:', cardId, e.target);
        this.model.selectCard(cardId);
        console.log(this.model.cards.map(c => `${c._state} ${c.type}`));
        console.log('-----------------')
    }
}
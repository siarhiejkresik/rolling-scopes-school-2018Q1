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

        console.log('GameModel: CLICKED id:', cardId, e.target); // debug mode
        
        this.model.selectCard(cardId);
        
        console.log(this.model.deck.cards.map(c => `${c._state} ${c.type}`)); // debug mode
        console.log('-----------------') // debug mode
    }
}
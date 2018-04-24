import GameView from "./GameView.js";
import GameModel from "./GameModel.js";

export default class GameController {
    constructor(settings, exitGameCallback) {
        this.view = new GameView(settings.cards);
        this.model = new GameModel(settings);
        
        this.view.addDomListener('click', this.processDomEvent.bind(this));
        this.model.deck.addCardStateObserver(this.view.updateCardView.bind(this.view));
        this.model.endGameSubscibers.subscribe(this.endGame.bind(this));
        
        this.exitGameCallback = exitGameCallback;
    }

    processDomEvent(e) {
        if (!e.target.closest('.card')) {
            return;
        }

        // TODO move to GameView interface
        // compute id of the selected card
        let cardId = e.target.closest('.card').id;
        cardId = cardId.split('-').slice(-1)[0];
        cardId = parseInt(cardId, 10);

        // debug mode
        console.log('=================');
        console.log('GameController: notify from browser, CLICKED id:', cardId, e.target);

        this.model.processSelectedCard(cardId);

        // debug mode
        console.log('GameController: model status', this.model.deck.cards.map(c => `${c._state} ${c.type}`));
        console.log('-----------------');
    }

    endGame(gameResult) {
        console.log('GameController: result =', gameResult);
        this.destroy();
        this.exitGameCallback(gameResult);
    }
    
    destroy() {
        this.view.destroy();
        // this.model.destroy();
    }
}
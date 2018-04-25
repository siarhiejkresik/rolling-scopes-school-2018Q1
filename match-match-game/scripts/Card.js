import Observable from "./Observable.js";

export default class Card {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this._state = STATE.CLOSED;

        this.stateObservers = new Observable();
    }

    get isClosed() {
        return this._state === STATE.CLOSED;
    }

    open() {
        this._state = STATE.OPENED;
        this._stateChangeNotify();
    }

    close() {
        this._state = STATE.CLOSED;
        this._stateChangeNotify();
    }

    disable() {
        this._state = STATE.DISABLED;
        this._stateChangeNotify();
    }

    _stateChangeNotify() {
        // debug
        console.log(`CardModel: id ${this.id} is ${this._state} now`)
        this.stateObservers.notify(this.id, this._state, this.type)
    }
}

export const STATE = {
    OPENED: 'OPENED',
    CLOSED: 'CLOSED',
    DISABLED: 'DISABLED'
}

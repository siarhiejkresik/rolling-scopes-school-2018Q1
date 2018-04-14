export default class Card {
    constructor(type) {
        this.type = type;
        this._state = State.CLOSED;
    }

    isOfTheSameType(card) {
        return this.type === card.type;
    }

    isOpened() {
        return this._state === State.OPENED;
    }

    isClosed() {
        return this._state === State.CLOSED;
    }

    isDisabled() {
        return this._state === State.DISABLED;
    }

    open() {
        this._state = State.OPENED;
    }
    
    close() {
        this._state = State.CLOSED;
    }
    
    disable() {
        this._state = State.DISABLED;
    }
}

const State = Object.freeze({
    OPENED: 'OPENED',
    CLOSED: 'CLOSED',
    DISABLED: 'DISABLED'
})
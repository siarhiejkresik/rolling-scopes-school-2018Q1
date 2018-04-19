export default class Card {
    constructor(type, listener) {
        this.type = type;
        this._state = STATE.CLOSED;
        this._listener = listener;
    }

    get isClosed() {
        return this._state === STATE.CLOSED;
    }

    open() {
        this._state = STATE.OPENED;
        // this._listener.notify(ACTION.OPEN, this);
    }

    close() {
        this._state = STATE.CLOSED;
        // this._listener.notify(ACTION.CLOSE, this);
    }

    disable() {
        this._state = STATE.DISABLED;
        // this._listener.notify(ACTION.DISABLE, this);
    }
}

const STATE = Object.freeze({
    OPENED: 'OPENED',
    CLOSED: 'CLOSED',
    DISABLED: 'DISABLED'
})

const ACTION = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    DISABLE: 'DISABLE'
}
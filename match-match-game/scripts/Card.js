export default class Card {
    constructor(id, type, view) {
        this.id = id;
        this.type = type;
        this._state = STATE.CLOSED;
        this._listener = view;
    }

    get isClosed() {
        return this._state === STATE.CLOSED;
    }

    open() {
        this._state = STATE.OPENED;
        this.notify();
    }

    close() {
        this._state = STATE.CLOSED;
        this.notify();
    }

    disable() {
        this._state = STATE.DISABLED;
        this.notify();
    }

    notify() {
        this._listener.updateCardView(this.id, this._state, this.type)
    }
}

export const STATE = {
    OPENED: 'OPENED',
    CLOSED: 'CLOSED',
    DISABLED: 'DISABLED'
}

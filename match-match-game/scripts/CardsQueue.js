const ANIMATION_SPEED = 1000;

export default class OpenedCardsQueue {
    constructor(size) {
        this.size = size;
        this.blocked = false;
        this._cards = [];
    }

    get isEmpty() {
        return !!this._cards.length;
    }

    get isFull() {
        return this.size === this._cards.length;
    }

    get isOfDifferentTypes() {
        // TODO move type checking to card interface?
        if (this._cards.length < 2) {
            return false;
        }
        return this._cards[0].type !== this._cards.slice(-1)[0].type;
    }

    process(card) {
        this.add(card);
        this.block();

        if (this.isOfDifferentTypes) {
            setTimeout(() => {
                this.closeAll();
                this.clear();
            }, ANIMATION_SPEED);
            this.unblock();
            return;
        }

        if (this.isFull) {
            setTimeout(() => {
                this.disableAll();
                this.clear();
            }, ANIMATION_SPEED);
            this.unblock();
            return true;
        }

        this.unblock(0);
    }

    add(card) {
        card.open();
        this._cards.push(card);
    }

    clear() {
        this._cards = [];
    }

    disableAll() {
        this._cards.map(card => card.disable());
    }

    closeAll() {
        this._cards.map(card => card.close());
    }

    block() {
        this.blocked = true;
    }

    unblock(timeout = ANIMATION_SPEED) {
        setTimeout(() => {
            this.blocked = false;
        }, timeout);
    }
}
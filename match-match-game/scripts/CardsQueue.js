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
        // TODO this._cards = [] ?
        // TODO move type checking to card interface
        // TODO compare only with the first card
        const type = this._cards[0].type;
        return !this._cards.every(card => card.type === type);
    }

    process() {
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

        this.unblock();
    }

    add(card) {
        this.block();
        card.open();
        this._cards.push(card);
        this.unblock();
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

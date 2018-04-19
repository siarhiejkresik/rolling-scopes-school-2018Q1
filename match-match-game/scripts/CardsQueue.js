export default class OpenedCardsQueue {
    constructor(size) {
        this._size = size;
        this._cards = [];
    }

    get isEmpty() {
        return !!this._cards.length;
    }

    get isFull() {
        return this._size === this._cards.length;
    }

    get isOfDifferentTypes() {
        // TODO this._cards = [] ?
        // TODO move type checking to card interface
        // TODO compare only with the first card
        const type = this._cards[0].type;
        return !this._cards.every(card => card.type === type);
    }

    process() {
        if (this.isOfDifferentTypes) {
            this.closeAll();
            this.clear();
            return;
        }

        if (this.isFull) {
            this.disableAll();
            this.clear();
            return true;
        }
    }

    add(card) {
        card.open();
        this._cards.push(card);
    }

    clear() {
        this._cards = [];
    }

    disableAll() {
        this._cards.map(card => card.disable())
    }

    closeAll() {
        this._cards.map(card => card.close())
    }
}
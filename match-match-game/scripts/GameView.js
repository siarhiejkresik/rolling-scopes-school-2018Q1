import {
    STATE
} from "./Card.js";

export default class GameView {
    constructor(size, back) {
        this.grid = this.renderGrid(size);
        this.back = back;
    }

    renderGrid(size) {
        // create grid
        const grid = document.createElement('section');
        grid.classList.add('grid');

        // add cards to grid
        for (let i = 0; i < size; i++) {
            const card = document.createRange().createContextualFragment(cardTemplate);
            grid.appendChild(card);
            grid.lastChild.id = `card-${i}`;
        };

        // insert grid in document
        document.body.appendChild(grid);
        return grid;
    }

    updateCardView(id, state, type) {
        console.log('notify from:', id, state);
        let selector = `#card-${id}`;
        let card = this.grid.querySelector(selector);
        
        if (state === STATE.OPENED) {
            let front = card.querySelector('.front');
            front.innerHTML = type;
            this.openCard(card);

        } else if (state === STATE.CLOSED) {
            this.closeCard(card);

        } else if (state === STATE.DISABLED) {
            this.disableCard(card);

        } else {
            throw new('unknown card state!')

        }
    }

    openCard(card) {
        card.classList.add('opened');
    }

    closeCard(card) {
        card.classList.remove('opened');
    }

    disableCard(card) {
        card.classList.add('disabled');
    }

    addCardListener(event, handler) {
        this.grid.addEventListener(event, handler);
    }
}

const cardTemplate = `
<div class="card">
    <div class="content">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>
</div>`

const gridTemplate = `
<section id="grid">`
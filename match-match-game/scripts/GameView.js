import {
    STATE
} from "./Card.js";

export default class GameView {
    constructor(size, cardBack='circle') {
        this.grid = this.renderGrid(size, cardBack);
    }

    renderGrid(size, cardBack) {
        // create grid
        // const grid = document.createElement('section');
        // grid.classList.add('grid');
        const grid = document.querySelector('.grid');

        // add cards to grid
        for (let i = 0; i < size; i++) {
            let card = cardTemplate(cardBack);
            card = document.createRange().createContextualFragment(card);
            grid.appendChild(card);
            grid.lastChild.id = `card-${i}`;
        };

        // insert grid in document
        // document.body.appendChild(grid);
        return grid;
    }

    updateCardView(id, state, type) {
        console.log('GameView:  notify from:', id, state); // debug mode
        let selector = `#card-${id}`;
        let card = this.grid.querySelector(selector);
        
        if (state === STATE.OPENED) {
            let front = card.querySelector('.front');
            front.innerHTML = type;
            this.openCard(card);

        } else if (state === STATE.CLOSED) {
            let front = card.querySelector('.front');
            front.innerHTML = null;
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

    addListener(event, handler, context) {
        this.grid.addEventListener(event, handler.bind(context));
    }
}

const cardTemplate = (cardBack) => {return `
<div class="card">
    <div class="content">
        <div class="face back ${cardBack}"></div>
        <div class="face front"></div>
    </div>
</div>`;}

const gridTemplate = `
<section id="grid">`
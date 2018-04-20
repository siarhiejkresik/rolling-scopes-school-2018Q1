export default class GameView {
    constructor(size, back) {
        this.grid = this.drawGrid(size);
    }
    createCard() {
        document.createElement('div')
    }
    drawGrid(size) {
        const grid = document.createElement('section')
        grid.id = 'grid'
        grid.innerHTML = Array(size)
            .fill()
            .map((x, i) => `<div id="${i}" class="card">${i}</div>`)
            .join('\n');
        document.body.appendChild(grid);
        return grid;
    }
    addCardListener(event, handler) {
        this.grid.addEventListener(event, handler);
    }
}


// const cardTemplate = card`<div id="${i}" class="card"><div class="back"><div class="front"></div></div></div>`


// export GameView;
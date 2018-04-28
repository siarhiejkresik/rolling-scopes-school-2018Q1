import {
    VIEWS,
    DIFFICULTY_BUTTONS
} from "./constants.js";


export default class Menu {
    constructor() {
        this.startButtons = document.querySelectorAll('.play');
        this.nextButton = document.querySelector('.next')
        this.logoutButton = document.querySelector('.logout')
        this.toMenuButton = document.querySelector('.return')
        this.difficultyButtons = document.querySelectorAll(Object.values(DIFFICULTY_BUTTONS));
        this.loginForm = document.querySelector('#login')

        this.nextButton.addEventListener('click', this.showLogIn.bind(this))
        this.toMenuButton.addEventListener('click', this.showMenu.bind(this))
    }

    showWelcome() {
        this._hideAllViews();
        this._showView(VIEWS.WELCOME);
    }

    showLogIn() {
        this._hideAllViews();
        this._showView(VIEWS.LOGIN);
    }

    showMenu() {
        this._hideAllViews();
        this._showView(VIEWS.MENU);
    }
    
    showGame() {
        this._hideAllViews();
        this._showView(VIEWS.GAME);
    }
    
    showGameEnd(gameResult) {
        this._hideAllViews();
        this._showView(VIEWS.RESULT);
        const view = document.querySelector(VIEWS.RESULT);
        view.querySelector('.time').innerHTML = gameResult;

    }

    toggleDifficulty(difficulty) {
        [...this.difficultyButtons].forEach(button => {
            if (button.classList.contains(difficulty)) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });
    }

    setPlayerNames(player) {
        const firstnames = document.querySelectorAll('.first-name');
        const lastnames = document.querySelectorAll('.last-name');
        [...firstnames].map(node => node.innerHTML = player.firstname);
        [...lastnames].map(node => node.innerHTML = player.lastname);
    }

    unSetPlayerNames() {
        this.setPlayerNames({firstname: '', lastname: ''});
    }

    _hideAllViews() {
        for (let view of Object.values(VIEWS)) {
            document.querySelector(view).classList.add('hidden');
        }
    }

    _showView(view) {
        document.querySelector(view).classList.remove('hidden');
    }
}
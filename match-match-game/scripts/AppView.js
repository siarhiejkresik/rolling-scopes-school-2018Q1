import {
    VIEWS,
    DIFFICULTIES_BUTTONS
} from "./constants.js";


export default class Menu {
    constructor() {
        this.startButtons = document.querySelectorAll('.play');
        this.nextButton = document.querySelector('.next')
        this.loginButton = document.querySelector('.submit-login')
        this.logoutButton = document.querySelector('.logout')
        this.toMenuButton = document.querySelector('.return')
        this.difficultyButtons = document.querySelectorAll(Object.values(DIFFICULTIES_BUTTONS));



        this.nextButton.addEventListener('click', this.showLogIn.bind(this))
        this.loginButton.addEventListener('click', this.showMenu.bind(this))
        this.toMenuButton.addEventListener('click', this.showMenu.bind(this))
    }

    showWelcome() {
        this._hideAll();
        this._showView(VIEWS.WELCOME);
    }

    showLogIn() {
        this._hideAll();
        this._showView(VIEWS.LOGIN);
    }

    showMenu() {
        this._hideAll();
        this._showView(VIEWS.MENU);
    }
    
    showGame() {
        this._hideAll();
        this._showView(VIEWS.GAME);
    }
    
    showGameEnd(gameResult) {
        this._hideAll();
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
        })
    }

    setPlayerNames(player) {
        const firstNames = document.querySelectorAll('.first-name');
        const lastNames = document.querySelectorAll('.last-name');
        [...firstNames].map(node => node.innerHTML = player.firstName);
        [...lastNames].map(node => node.innerHTML = player.lastName);
    }

    unSetPlayerNames() {
        this.setPlayerNames({firstName: '', lastName: ''});
    }

    _hideAll() {
        for (let view of Object.values(VIEWS)) {
            document.querySelector(view).classList.add('hidden');
        }
    }

    _showView(view) {
        document.querySelector(view).classList.remove('hidden');

    }
}
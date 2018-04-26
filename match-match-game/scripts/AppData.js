export default class AppData {
    constructor() {
        this._storage = new LocalStorage();
        this.data = this._storage.load();
    }

    updatePlayer(player) {
    }

    addNewPlayer(firstName, lastName, email = '') {
    }

    getLastPlayer() {
        const id = this.data.lastPlayerId;
        return this.getPlayer(id);
    }

    clearLastPlayer() {
        this.data.lastPlayerId = null;
        this.saveToStorage();
    }
    getPlayer(id) {
        return this.data.players.find(player => player.id === id);
    }

    saveToStorage() {
        this._storage.save(this.data);
    }
}


class LocalStorage {
    constructor(key = 'matchmatch') {
        this.key = key;
    }
    load() {
        const db = localStorage.getItem(this.key);
        if (!db) {
            this.save(test_db);
            return test_db;
        }
        return JSON.parse(db);
    }
    save(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}

const test_db = {
    lastPlayerId: 0,
    players: [{
        id: 0,
        firstName: 'John',
        lastName: 'Doe'
    }, {
        id: 1,
        firstName: 'Сяргей',
        lastName: 'Крэсік'
    }, {
        id: 2,
        firstName: 'Павел',
        lastName: 'Булычев'
    }]
}
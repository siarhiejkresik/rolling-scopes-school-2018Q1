import Observable from "./Observable.js";

export default class Timer {
    constructor(interval = 1000) {
        this.interval = interval;
        this.delta = 0;
        this._timer = null;
        
        this.timeSubscribers = new Observable();
    }

    start() {
        const startTime = Date.now();
        this.timeSubscribers.notify(this.serializeToMMSS());

        this._timer = setInterval(() => {
            this.delta = Date.now() - startTime;
            this.timeSubscribers.notify(this.serializeToMMSS());
        }, this.interval);
    }

    stop() {
        if (this._timer === null) {
            throw 'you must start first before trying to stop';
        }
        clearInterval(this._timer);
        return this.serializeToMMSS();
    }
    
    // TODO move to TimerView or a separate TimeFormater class/function
    serializeToMMSS() {
        let seconds;
        let minutes;
        const formatting = int_ => int_ < 10 ? '0' + int_ : int_;

        if (this.delta >= (60 * 60) * 1000) {
            minutes = 59;
            seconds = 59;
        } else {
            seconds = formatting(parseInt((this.delta / 1000) % 60));
            minutes = formatting(parseInt((this.delta / (1000 * 60) % 60)));
        }

        return `${minutes}:${seconds}`;
    }
}
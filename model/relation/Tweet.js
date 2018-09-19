"use strict";

// (:User)-[]->(:Message)

module.exports = class Tweet {
    constructor(from, to, date) {
        this._from = from;
        this._to = to;
        this.date = date;
        this._type = 'Tweet';
    }

    toString() {
        return `{date: "${this.date}"}`;
    }
}
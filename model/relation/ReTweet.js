"use strict";

// (:Message)-[]->(:Message)

module.exports = class ReTweet {
    constructor(date) {
        this.date = date;
        this._type = 'ReTweet';
    }

    toString() {
        return `{date: "${this.date}"}`;
    }
}
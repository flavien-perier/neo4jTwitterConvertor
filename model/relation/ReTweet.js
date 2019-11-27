"use strict";

// (:Message)-[]->(:Message)

module.exports = class ReTweet {
    constructor(date) {
        this.date = new Date(date).getTime();
        this._type = 'ReTweet';
    }

    toString() {
        return `{date: "${this.date}"}`;
    }
}
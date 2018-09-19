"use strict";

// (:Message)-[]->(:Hashtag)

module.exports = class Content {
    constructor(from, to) {
        this._from = from;
        this._to = to;
        this._type = 'Content';
    }

    toString() {
        return `{}`;
    }
}
"use strict";

// (:Message)-[]->(:Lang)

module.exports = class MessageLang {
    constructor(from, to) {
        this._from = from;
        this._to = to;
        this._type = 'MessageLang';
    }

    toString() {
        return `{}`;
    }
}
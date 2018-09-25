"use strict";

// (:User)-[]->(:Lang)

module.exports = class UserLang {
    constructor(from, to) {
        this._from = from;
        this._to = to;
        this._type = 'UserLang';
    }

    toString() {
        return `{}`;
    }
}
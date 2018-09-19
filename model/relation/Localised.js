"use strict";

// (:User)-[]->(:Location)

module.exports = class Localised {
    constructor(from, to, lang) {
        this._from = from;
        this._to = to;
        this.lang = lang;
        this._type = 'Localised';
    }

    toString() {
        return `{lang: "${this.lang}"}`;
    }
}
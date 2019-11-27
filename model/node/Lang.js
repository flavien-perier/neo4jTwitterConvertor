"use strict";

module.exports =  class Lang {
    constructor(id) {
        this.id = id;
        this._type = 'Lang';
    }

    toString() {
        return `{id: "${this.id}"}`;
    }
}
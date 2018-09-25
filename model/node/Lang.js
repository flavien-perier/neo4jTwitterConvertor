"use strict";

module.exports =  class Lang {
    constructor(id) {
        this.id = id;
        this._type = 'Lang';
        this._newValue = false;
    }

    toString() {
        return `{id: "${this.id}"}`;
    }
}
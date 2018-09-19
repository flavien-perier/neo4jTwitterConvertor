"use strict";

module.exports =  class Hashtag {
    constructor(id) {
        this.id = id;
        this._type = 'Hashtag';
        this._newValue = false;
    }

    toString() {
        return `{id: "${this.id}"}`;
    }
}
"use strict";

module.exports =  class Hashtag {
    constructor(id) {
        this.id = id;
        this._type = 'Hashtag';
    }

    toString() {
        return `{id: "${this.id}"}`;
    }
}
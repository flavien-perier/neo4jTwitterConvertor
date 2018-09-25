"use strict";

const formatString = require('../../functions/formatString');

module.exports =  class Location {
    constructor(id) {
        this.id = formatString(id);
        this._type = 'Location';
        this._newValue = false;
    }

    toString() {
        return `{id: "${this.id}"}`;
    }
}
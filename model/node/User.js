"use strict";

const formatString = require('../../functions/formatString');

module.exports = class User {
    constructor(id, name) {
        this.id = id;
        this.name = formatString(name);
        this._type = 'User';
        this._newValue = false;
    }

    toString() {
        return `{id: "${this.id}", name: "${this.name}"}`;
    }
}
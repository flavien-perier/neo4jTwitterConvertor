"use strict";

const formatString = require('../../functions/formatString');

module.exports = class User {
    constructor(id, name, screenName) {
        this.id = id;
        this.name = formatString(name);
        this.screenName = formatString(screenName);
        this._type = 'User';
    }

    toString() {
        return `{id: "${this.id}", name: "${this.name}", screenName: "${this.screenName}"}`;
    }
}
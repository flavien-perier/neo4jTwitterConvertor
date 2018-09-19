"use strict";

const formatString = require('../../functions/formatString');
const sentiment = require('../../conf/sentiment');

module.exports = class Message {
    constructor(id, text, lang) {
        this.id = id;
        this.text = formatString(text);
        this.lang = lang;

        this.sentiment = sentiment.analyze(text).score;

        this._type = 'Message';
        this._newValue = false;
    }

    toString() {
        return `{id: "${this.id}", text: "${this.text}", lang: "${this.lang}", sentiment: ${this.sentiment}}`;
    }
}
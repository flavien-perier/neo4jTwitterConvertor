"use strict";

const formatString = require('../../functions/formatString');
const sentiment = require('../../conf/sentiment');

module.exports = class Message {
    constructor(id, text, date, lang) {
        this.id = id;
        this.text = formatString(text);
        this.date = new Date(date).getTime();
        this.lang = lang;

        this.sentiment = sentiment.analyze(text).score;

        this._type = 'Message';
    }

    toString() {
        return `{id: "${this.id}", text: "${this.text}", date: "${this.date}", lang: "${this.lang}", sentiment: ${this.sentiment}}`;
    }
}
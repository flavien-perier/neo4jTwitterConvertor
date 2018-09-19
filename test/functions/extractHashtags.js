"use strict";

const extractHashtags = require('../../functions/extractHashtags');
const assert = require('assert');

describe('extractHashtags', () => {
    it('should extract hashtag of tweet', () => {
        const actualValue = extractHashtags('I send #message with #value');
        const expectedValue = ['message', 'value'];

        assert.deepEqual(actualValue, expectedValue);
    });
    it('should return [] if the message does not contain hashtag', () => {
        const actualValue = extractHashtags('I send message without value');
        const expectedValue = [];

        assert.deepEqual(actualValue, expectedValue);
    });
    it('should return hashtags to lower case', () => {
        const actualValue = extractHashtags('I send #MeSsage with #vaLue');
        const expectedValue = ['message', 'value'];

        assert.deepEqual(actualValue, expectedValue);
    });
});
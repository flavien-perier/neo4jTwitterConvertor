"use strict";

const formatString = require('../../functions/formatString');
const assert = require('assert');

describe('formatString', () => {
    it('should replace \" by \'', () => {
        const actualValue = formatString('test \" value');
        const expectedValue = 'test \' value';

        assert.deepEqual(actualValue, expectedValue);
    });
    it('should replace \\ by /', () => {
        const actualValue = formatString('test \\ value');
        const expectedValue = 'test / value';

        assert.deepEqual(actualValue, expectedValue);
    });
    it('should RT if the message is a retweet', () => {
        const actualValue = formatString('RT message');
        const expectedValue = 'message';

        assert.deepEqual(actualValue, expectedValue);
    });
});
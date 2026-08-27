const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies audio', () => assert.equal(getCategory('song.mp3'), 'Audio'));

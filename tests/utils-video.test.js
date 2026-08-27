const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies videos', () => assert.equal(getCategory('clip.mp4'), 'Videos'));

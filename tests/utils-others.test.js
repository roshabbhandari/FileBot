const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('unknown extensions go to Others', () => assert.equal(getCategory('script.xyz'), 'Others'));

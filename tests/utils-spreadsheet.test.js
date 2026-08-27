const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies spreadsheets', () => assert.equal(getCategory('data.csv'), 'Spreadsheets'));

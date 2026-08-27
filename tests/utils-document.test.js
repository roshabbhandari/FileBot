const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies documents', () => assert.equal(getCategory('notes.pdf'), 'Documents'));

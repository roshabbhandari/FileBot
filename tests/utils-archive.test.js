const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies archives', () => assert.equal(getCategory('backup.zip'), 'Archives'));

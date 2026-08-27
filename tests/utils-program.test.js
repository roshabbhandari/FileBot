const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies programs', () => assert.equal(getCategory('installer.exe'), 'Programs'));

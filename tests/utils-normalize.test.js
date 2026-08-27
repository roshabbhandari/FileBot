const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeName } = require('../src/utils');

test('normalizeName trims and collapses spaces', () => {
  assert.equal(normalizeName('  my   file.txt  '), 'my file.txt');
});

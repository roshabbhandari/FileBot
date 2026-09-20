const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeName } = require('../src/utils');

test('normalizeName trims and collapses whitespace', () => {
  assert.equal(normalizeName('  project   report.pdf  '), 'project report.pdf');
});

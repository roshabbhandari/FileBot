const test = require('node:test');
const assert = require('node:assert/strict');
const { isHidden } = require('../src/utils');

test('isHidden identifies dot-prefixed filenames', () => {
  assert.equal(isHidden('.env'), true);
  assert.equal(isHidden('notes.txt'), false);
});

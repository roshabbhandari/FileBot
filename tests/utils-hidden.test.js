const test = require('node:test');
const assert = require('node:assert/strict');
const { isHidden } = require('../src/utils');

test('isHidden detects dot files', () => {
  assert.equal(isHidden('.config'), true);
  assert.equal(isHidden('photo.jpg'), false);
});

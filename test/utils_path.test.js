const test = require('node:test');
const assert = require('node:assert/strict');
const { isSamePath } = require('../src/utils');

test('isSamePath compares resolved paths', () => {
  assert.equal(isSamePath('folder/../file.txt', './file.txt'), true);
  assert.equal(isSamePath('a.txt', 'b.txt'), false);
});

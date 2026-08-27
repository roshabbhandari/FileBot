const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { isSamePath } = require('../src/utils');

test('isSamePath compares resolved paths', () => {
  const file = path.join('demo', 'file.txt');
  assert.equal(isSamePath(file, './demo/file.txt'), true);
});

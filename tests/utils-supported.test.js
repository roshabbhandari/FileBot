const test = require('node:test');
const assert = require('node:assert/strict');
const { isSupportedFile } = require('../src/utils');

test('isSupportedFile detects files with extensions', () => {
  assert.equal(isSupportedFile('photo.jpg'), true);
  assert.equal(isSupportedFile('README'), false);
});

const test = require('node:test');
const assert = require('node:assert/strict');
const { getExtension } = require('../src/utils');

test('getExtension returns lowercase extension', () => {
  assert.equal(getExtension('PHOTO.JPG'), '.jpg');
});

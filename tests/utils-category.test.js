const test = require('node:test');
const assert = require('node:assert/strict');
const { getCategory } = require('../src/utils');

test('getCategory classifies images', () => {
  assert.equal(getCategory('photo.png'), 'Images');
});

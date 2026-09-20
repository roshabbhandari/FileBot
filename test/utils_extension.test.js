const test = require('node:test');
const assert = require('node:assert/strict');
const { getExtension } = require('../src/utils');

test('getExtension normalizes extensions to lowercase', () => {
  assert.equal(getExtension('Report.PDF'), '.pdf');
  assert.equal(getExtension('photo.JpG'), '.jpg');
});

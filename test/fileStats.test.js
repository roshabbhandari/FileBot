const test = require('node:test');
const assert = require('node:assert/strict');
const { formatBytes } = require('../src/fileStats');

test('formats zero bytes', () => {
  assert.equal(formatBytes(0), '0 B');
});

test('formats kilobytes', () => {
  assert.equal(formatBytes(1024), '1.00 KB');
});

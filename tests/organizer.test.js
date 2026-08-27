const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { organize } = require('../src/organizer');

test('organize moves files into category folders', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'filebot-'));
  await fs.writeFile(path.join(temp, 'photo.jpg'), 'demo');

  const result = await organize(temp);

  assert.equal(result.processed, 1);
  assert.equal(await fs.readFile(path.join(temp, 'Images', 'photo.jpg'), 'utf8'), 'demo');
});

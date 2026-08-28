const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { organize } = require('../src/organizer');

test('dry run reports files without moving them', async () => {
  const source = await fs.mkdtemp(path.join(os.tmpdir(), 'filebot-'));
  const filePath = path.join(source, 'photo.jpg');

  try {
    await fs.writeFile(filePath, 'demo');
    const result = await organize(source, { dryRun: true });

    assert.equal(result.processed, 1);
    assert.equal(result.dryRun, true);
    assert.equal(await fs.stat(filePath).then(() => true), true);
    await assert.rejects(fs.stat(path.join(source, 'Images', 'photo.jpg')));
  } finally {
    await fs.rm(source, { recursive: true, force: true });
  }
});

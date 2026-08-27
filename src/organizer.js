const fs = require('node:fs/promises');
const path = require('node:path');
const { getCategory } = require('./utils');
const logger = require('./logger');

async function organize(source) {
  const entries = await fs.readdir(source, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());

  for (const file of files) {
    const category = getCategory(file.name);
    const targetDir = path.join(source, category);
    await fs.mkdir(targetDir, { recursive: true });
    await fs.rename(path.join(source, file.name), path.join(targetDir, file.name));
    logger.success(`Moved ${file.name} -> ${category}`);
  }

  return { processed: files.length };
}

module.exports = { organize };

const path = require('node:path');
const { CATEGORIES, DEFAULT_CATEGORY } = require('./constants');

function getExtension(fileName) {
  return path.extname(fileName).toLowerCase();
}

function getCategory(fileName) {
  const extension = getExtension(fileName);

  for (const [category, extensions] of Object.entries(CATEGORIES)) {
    if (extensions.includes(extension)) return category;
  }

  return DEFAULT_CATEGORY;
}

module.exports = { getExtension, getCategory };

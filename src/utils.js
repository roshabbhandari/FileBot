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

function isSupportedFile(fileName) {
  return Boolean(getExtension(fileName));
}

function normalizeName(fileName) {
  return fileName.trim();
}

module.exports = { getExtension, getCategory, isSupportedFile, normalizeName };

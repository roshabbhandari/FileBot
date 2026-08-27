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

function isHidden(fileName) {
  return fileName.startsWith('.');
}

function isSamePath(a, b) {
  return path.resolve(a) === path.resolve(b);
}

module.exports = { getExtension, getCategory, isSupportedFile, normalizeName, isHidden, isSamePath };

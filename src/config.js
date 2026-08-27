const os = require('node:os');
const path = require('node:path');

function defaultDownloadsPath() {
  return path.join(os.homedir(), 'Downloads');
}

function createConfig(inputPath) {
  return {
    source: path.resolve(inputPath || defaultDownloadsPath())
  };
}

module.exports = { defaultDownloadsPath, createConfig };

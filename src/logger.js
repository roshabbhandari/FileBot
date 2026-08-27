function log(message) {
  console.log(`[FileBot] ${message}`);
}

function success(message) {
  console.log(`✓ ${message}`);
}

function warn(message) {
  console.warn(`! ${message}`);
}

function error(message) {
  console.error(`✗ ${message}`);
}

module.exports = { log, success, warn, error };

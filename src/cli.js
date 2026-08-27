const { createConfig } = require('./config');
const { organize } = require('./organizer');
const logger = require('./logger');

async function run() {
  const source = process.argv[2];
  const config = createConfig(source);

  logger.log(`Scanning: ${config.source}`);
  const result = await organize(config.source);
  logger.success(`Finished. ${result.processed} file(s) processed.`);
}

module.exports = { run };

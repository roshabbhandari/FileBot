const { createConfig } = require('./config');
const { organize } = require('./organizer');
const logger = require('./logger');

async function run() {
  const source = process.argv[2];
  const dryRun = process.argv.includes('--dry-run');
  const config = createConfig(source);

  logger.log(`Scanning: ${config.source}`);
  const result = await organize(config.source, { dryRun });
  logger.success(`Finished. ${result.processed} file(s) processed${dryRun ? ' (dry run)' : ''}.`);
}

module.exports = { run };

const { run } = require('./cli');

run().catch((error) => {
  console.error(`FileBot error: ${error.message}`);
  process.exitCode = 1;
});

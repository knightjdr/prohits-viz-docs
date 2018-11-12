const { spawn } = require('child_process');

const fixFile = dest => (
  new Promise((resolve, reject) => {
    const process = spawn(
      './node_modules/.bin/eslint',
      [
        '--fix',
        dest,
      ],
    );
    process.on('error', (err) => {
      reject(err);
    });
    process.on('exit', (err) => {
      if (err) {
        reject(err);
      }
    });
  })
);

module.exports = fixFile;

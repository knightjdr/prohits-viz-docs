const fs = require('fs-extra');

const file = {
  readFile: (location) => (
    new Promise((resolve, reject) => {
      fs.readFile(location)
        .then((text) => {
          resolve(text.toString());
        })
        .catch((err) => {
          reject(err);
        });
    })
  ),
  writeFile: (filename, component, options = {}) => (
    new Promise((resolve, reject) => {
      fs.outputFile(filename, component, options)
        .then(() => {
          resolve(filename);
        })
        .catch((err) => {
          reject(err);
        });
    })
  ),
};

module.exports = file;

const fs = require('fs-extra');

const file = {
  readFile: location => (
    new Promise((resolve, reject) => {
      fs.readFile(location, (err, text) => {
        if (!err) {
          resolve(text.toString());
        }
        reject();
      });
    })
  ),
  writeFile: (filename, component) => (
    new Promise((resolve, reject) => {
      fs.outputFile(filename, component, (err) => {
        if (!err) {
          resolve(filename);
        }
        reject(err);
      });
    })
  ),
};

module.exports = file;

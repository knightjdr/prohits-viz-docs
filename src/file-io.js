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
  writeFile: (location, rootDir, component) => (
    new Promise((resolve, reject) => {
      const dest = `${rootDir}/${location}.js`;
      fs.outputFile(dest, component, (err) => {
        if (!err) {
          resolve(dest);
        }
        reject(err);
      });
    })
  ),
};

module.exports = file;

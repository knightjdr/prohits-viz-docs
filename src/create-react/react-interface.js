/* eslint-disable no-console */

const fileIO = require('./file-io');
const generateHTML = require('./generate-html');
const getModuleName = require('../module-name');
const fixFile = require('./fix-file');

const reactInterface = (def, rootDirs) => {
  const moduleName = getModuleName(def.location);
  fileIO.readFile(`${rootDirs.md}/${def.location}.md`)
    .then((text) => {
      const component = generateHTML(moduleName.module, text);
      return fileIO.writeFile(`${rootDirs.react}/${def.location}.js`, component);
    })
    .then((dest) => fixFile(dest))
    .catch((err) => {
      console.log(`Error on file ${def.location}: ${err}`);
    });
};

module.exports = reactInterface;

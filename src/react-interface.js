/* eslint-disable no-console */

const fileIO = require('./file-io');
const generateHTML = require('./generate-html');
const generateTest = require('./generate-test');
const getModuleName = require('./module-name');
const fixFile = require('./fix-file');

const reactInterface = (def, rootDirs) => {
  const moduleName = getModuleName(def.location);
  fileIO.readFile(`${rootDirs.md}/${def.location}.md`)
    .then((text) => {
      const component = generateHTML(moduleName.module, text);
      const test = generateTest(moduleName.file, moduleName.module);
      return Promise.all([
        fileIO.writeFile(`${rootDirs.react}/${def.location}.js`, component),
        fileIO.writeFile(`${rootDirs.react}/${def.location}.test.js`, test),
      ]);
    })
    .then(dest => (
      Promise.all([
        fixFile(dest[0]),
        fixFile(dest[1]),
      ])
    ))
    .catch((err) => {
      console.log(`Error on file ${def.location}: ${err}`);
    });
};

module.exports = reactInterface;

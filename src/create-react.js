/* eslint-disable no-console */

const convertText = require('./convert-text');
const fileIO = require('./file-io');
const fixFile = require('./fix-file');
const help = require('./help-modules');

const rootDirs = {
  md: './md',
  react: './components',
};

const createComponent = (def) => {
  fileIO.readFile(`${rootDirs.md}/${def.location}.md`)
    .then((text) => {
      const component = convertText(def.location, text);
      return fileIO.writeFile(def.location, rootDirs.react, component);
    })
    .then(dest => (
      fixFile(dest)
    ))
    .catch((err) => {
      console.log(`Error on file ${def.location}: ${err}`);
    });
};

createComponent(help[0]);

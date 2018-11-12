const help = require('../help-modules');
const pageArray = require('./page-array');
const reactInterface = require('./react-interface');

const dirs = {
  md: './md',
  react: './components',
};

const iterator = (modules, rootDirs) => {
  modules.forEach((module) => {
    reactInterface(module, rootDirs);
    if (module.children) {
      iterator(module.children, rootDirs);
    }
  });
};

/* Iterate over md folders */
iterator(help, dirs);

/* Generate page array with imports */
pageArray(help, dirs.react);

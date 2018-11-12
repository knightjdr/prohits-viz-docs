/* eslint-disable no-console */

const fs = require('fs-extra');

const generatePDF = require('./generate-pdf');
const help = require('../help-modules');
const pdfInterface = require('./pdf-interface');

const dirs = {
  md: './md',
  pdf: './pdf',
};

const iterator = (modules, rootDirs) => {
  modules.forEach((module) => {
    pdfInterface(module, rootDirs);
    if (module.children) {
      iterator(module.children, rootDirs);
    }
  });
};

Promise.all([
  fs.remove(`${dirs.md}/combined.md`),
  fs.remove(`${dirs.pdf}/manual.pdf`),
])
  .then(() => {
    iterator(help, dirs);
    generatePDF(`${dirs.md}/combined.md`, `${dirs.pdf}/manual.pdf`);
  })
  .catch((err) => {
    console.error(err);
  });

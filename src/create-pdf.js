/* eslint-disable no-console */

const fs = require('fs-extra');

const generatePDF = require('./generate-pdf');
const help = require('./help-modules');
const pdfInterface = require('./pdf-interface');

const dirs = {
  md: './md',
  pdf: './pdf',
};

const interateDef = (helpModule, rootDirs) => {
  pdfInterface(helpModule, rootDirs);
  if (helpModule.children) {
    helpModule.children.forEach((childModule) => {
      interateDef(childModule, rootDirs);
    });
  }
};

Promise.all([
  fs.remove(`${dirs.md}/combined.md`),
  fs.remove(`${dirs.pdf}/manual.pdf`),
])
  .then(() => {
    help.forEach((helpModule) => {
      interateDef(helpModule, dirs);
    });
    generatePDF(`${dirs.md}/combined.md`, `${dirs.pdf}/manual.pdf`);
  })
  .catch((err) => {
    console.error(err);
  });

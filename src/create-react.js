const help = require('./help-modules');
const moduleInterface = require('./module-interface');

const dirs = {
  md: './md',
  react: './components',
};

const interateDef = (helpModule, rootDirs) => {
  moduleInterface(helpModule, rootDirs);
  if (helpModule.children) {
    helpModule.children.forEach((childModule) => {
      interateDef(childModule, rootDirs);
    });
  }
};

help.forEach((helpModule) => {
  interateDef(helpModule, dirs);
});

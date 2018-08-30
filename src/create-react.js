const help = require('./help-modules');
const reactInterface = require('./react-interface');

const dirs = {
  md: './md',
  react: './components',
};

const interateDef = (helpModule, rootDirs) => {
  reactInterface(helpModule, rootDirs);
  if (helpModule.children) {
    helpModule.children.forEach((childModule) => {
      interateDef(childModule, rootDirs);
    });
  }
};

help.forEach((helpModule) => {
  interateDef(helpModule, dirs);
});

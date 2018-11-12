
const JSON5 = require('json5');

const fileIO = require('./file-io');
const getModuleName = require('../module-name');

const arrayUpdate = (help, importString, parentModule) => {
  let updatedimportString = importString;
  const updatedArr = help.reduce((accum, item) => {
    const moduleName = getModuleName(item.location);
    const component = `${parentModule}${moduleName.module}`;
    const importStatement = `import ${component} from './${item.location}';\n`;
    updatedimportString = `${updatedimportString}${importStatement}`;
    const updatedItem = {
      component,
      linkText: item.linkText,
      route: item.route,
      panelText: item.title,
    };
    const childContent = item.children ? arrayUpdate(item.children, '', component) : null;
    if (childContent) {
      updatedimportString = `${updatedimportString}${childContent.importString}`;
      updatedItem.children = childContent.updatedArr;
    }
    return [...accum, updatedItem];
  }, []);

  return {
    importString: updatedimportString,
    updatedArr,
  };
};

const pageArray = (help, outdir) => {
  const { importString, updatedArr } = arrayUpdate(help, '', '');
  let mergedFileContents = `${importString}\n`
    + `const HelpPages = ${JSON5.stringify(updatedArr, { quote: '\'', space: 2 })};\n\n`
    + 'export default HelpPages;\n';
  mergedFileContents = mergedFileContents.replace(/(\s+)'(\w+)':/g, '$1$2:');
  mergedFileContents = mergedFileContents.replace(/component: '(\w+)'/g, 'component: $1');
  fileIO.writeFile(`${outdir}/help-pages.js`, mergedFileContents);
};

module.exports = pageArray;

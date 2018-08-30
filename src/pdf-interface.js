const fs = require('fs');
const getModuleName = require('./module-name');

/* All tasks are done synchronously to ensure the proper merge order
** of the markdown files. */
const pdfInterface = (def, rootDirs) => {
  const moduleName = getModuleName(def.location);
  const text = fs.readFileSync(`${rootDirs.md}/${def.location}.md`).toString();
  const textWithHeader = `## ${moduleName.title}\n\n${text}\n\n`;
  fs.writeFileSync(`${rootDirs.md}/combined.md`, textWithHeader, { flag: 'a' });
};

module.exports = pdfInterface;

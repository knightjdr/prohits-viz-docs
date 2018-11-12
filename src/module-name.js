const camelCase = require('./camel-case');
const fileName = require('./filename');

const getModuleName = (location) => {
  const file = fileName(location);
  let titleName = file.replace(/-/g, ' ');

  // Convert first letter to upper case.
  titleName = titleName.charAt(0).toUpperCase() + titleName.slice(1);
  return {
    file,
    module: camelCase(file),
    title: titleName,
  };
};

module.exports = getModuleName;

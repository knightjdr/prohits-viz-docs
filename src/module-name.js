const getModuleName = (location) => {
  const re = new RegExp(/\/([^/]+)$/);

  // Get filename from path string.
  const filename = location.match(re)[1];

  // Convert to camel case.
  let moduleName = filename.replace(/-([a-z])/g, matches => matches[1].toUpperCase());

  // Convert to title case.
  let titleName = filename.replace(/-/g, ' ');

  // Convert first letter to upper case.
  moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  titleName = titleName.charAt(0).toUpperCase() + titleName.slice(1);
  return {
    file: filename,
    module: moduleName,
    title: titleName,
  };
};

module.exports = getModuleName;

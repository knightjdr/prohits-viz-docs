const getModuleName = (location) => {
  const re = new RegExp(/\/([^/]+)$/);

  // Get filename from path string.
  const filename = location.match(re)[1];

  // Convert to camel case.
  let moduleName = filename.replace(/-([a-z])/g, matches => matches[1].toUpperCase());

  // Convert first letter to upper case.
  moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  return {
    file: filename,
    module: moduleName,
  };
};

module.exports = getModuleName;

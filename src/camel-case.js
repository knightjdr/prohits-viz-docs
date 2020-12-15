const camelCase = (name) => {
  let moduleName = name.replace(/-([a-z])/g, (matches) => matches[1].toUpperCase());
  moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  return moduleName;
};

module.exports = camelCase;

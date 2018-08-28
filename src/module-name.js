const getModuleName = (location) => {
  const re = new RegExp(/\/([^/]+)$/);
  const filename = location.match(re)[1];
  return filename.replace(/-([a-z])/g, matches => matches[1].toUpperCase());
};

module.exports = getModuleName;

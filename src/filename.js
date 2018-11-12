const fileName = (location) => {
  const re = new RegExp(/\/([^/]+)$/);
  return location.match(re)[1];
};

module.exports = fileName;

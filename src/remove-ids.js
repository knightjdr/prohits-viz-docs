const removeIds = text => (
  text.replace(/ id="[^"]*"/g, '')
);

module.exports = removeIds;

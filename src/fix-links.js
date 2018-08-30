const fixLinks = (text) => {
  const fixed = text;

  const regex = new RegExp(/<a.*href="([^"]+)"[^>]*>([^<]+)<\/a>/g);
  return fixed.replace(regex, '[$2]($1)');
};

module.exports = fixLinks;

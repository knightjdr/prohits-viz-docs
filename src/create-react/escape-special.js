const whileCondition = (str, regex) => {
  const matched = str.match(regex);
  return matched && matched.length > 0;
};

const escapeSpecial = (text) => {
  let escaped = text;

  const quotRegex = new RegExp(/(>[^"<]*)"([^"<]*)/g);
  do {
    escaped = escaped.replace(quotRegex, '$1&quot;$2');
  } while (whileCondition(escaped, quotRegex));

  const aposRegex = new RegExp(/(>[^'<]*)'([^'<]*)/g);
  do {
    escaped = escaped.replace(aposRegex, '$1&apos;$2');
  } while (whileCondition(escaped, aposRegex));
  return escaped;
};

module.exports = escapeSpecial;

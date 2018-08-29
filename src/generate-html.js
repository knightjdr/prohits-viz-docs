const showdown = require('showdown');

const escapeSpecial = require('./escape-special');
const removeIDs = require('./remove-ids');

const converter = new showdown.Converter();

const generateHTML = (moduleName, text) => {
  let html = converter.makeHtml(text);
  html = escapeSpecial(html);

  /* This is needed because showdown is creating IDs for headers
  ** but is not supposed to according to default options and I
  ** can't seem to unset that option. */
  html = removeIDs(html);

  /* Generate HMTL string */
  let output = `import React from 'react';
  
  const ${moduleName} = () => (
    <article>
  `;
  output += html;
  output += `
    </article>
  );
  
  export default ${moduleName};

  `;
  return output;
};

module.exports = generateHTML;

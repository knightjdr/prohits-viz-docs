const showdown = require('showdown');

const getModuleName = require('./module-name');

const converter = new showdown.Converter();

const convertText = (location, text) => {
  const html = converter.makeHtml(text);
  const moduleName = getModuleName(location);
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

module.exports = convertText;

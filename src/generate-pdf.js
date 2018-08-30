const fs = require('fs');
const markdownpdf = require('markdown-pdf');

const generatePDF = (mdFile, dest) => {
  fs.createReadStream(mdFile)
    .pipe(markdownpdf({
      cssPath: './pdf.css',
      remarkable: {
        breaks: false,
      },
    }))
    .pipe(fs.createWriteStream(dest));
};

module.exports = generatePDF;

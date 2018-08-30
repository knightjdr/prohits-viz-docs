/* eslint-disable prefer-template */

/* The non ES6 syntax is required */

exports.footer = {
  height: '1cm',
  contents: function callback(pageNum, numPages) {
    return '<div><span style="float:right; font-family: sans-serif; font-size: 8px">' + pageNum + '/' + numPages + '</span></div>';
  },
};

exports.header = null;

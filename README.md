# ProHits-viz documentation

Converts markdown to  HTML packaged for React and a merged PDF.

# Description

Help text is written as markdown and formatted for React or merged together
to create a single PDF suitalbe for download. Showdown.js is used to convert
the mardown to html and then this is wrapped in a function for React. The
PDF is generated using mardown-pdf.

# Usage

Run create-react script to generate the help components. Output will be in the
"components" folder.

`node src/create-react.js`

Run create-pdf script to generate merged PDF. Output will be in the
"pdf" folder.

`node src/create-pdf.js`

# Tests

`npm test`
# ProHits-viz documentation

Converts markdown to combined PDF and HTML packaged for React.

# Description

Help text is written as markdown and converted to React. Showdown.js
is used to convert the mardown to html and then this is wrapped in a function
for React. The output file is run through eslint with the '--fix' flag to
fix indenting issue.

# Usage

Run create-react script to generate help components.

`node src/create-react.js`

# Tests

`npm test`
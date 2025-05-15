'use strict';

const express = require('express');
const fs = require('fs');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// HTML content to write
const html = `
<!DOCTYPE html>
<html>
  <head><title>Static Page</title></head>
  <body style='background-color:#283E5B'>
    <h1 style='color: orange; text-align:center'>
      AWS First Cloud Journey (${os.hostname()})
    </h1>
  </body>
</html>
`;

// Create /build directory if it doesn't exist
if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

// Write HTML file
fs.writeFileSync('build/index.html', html);
console.log("index.html has been generated.");

// Express app
const app = express();
app.use(express.static('build')); // serve static files from build

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

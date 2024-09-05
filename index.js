var path = require('path');
var fs = require('fs');
var mkdir = require('mkdirp');

function createOutputStream(file, options) {
  options = options || {};
  
  // Ensure the directory structure exists before creating the stream
  var dir = path.dirname(file);
  mkdir.sync(dir);

  // Create the write stream with the correct options
  return fs.createWriteStream(file, options);
}

module.exports = createOutputStream;

const fs = require("fs");
const zlib = require("zlib");

function gzip(fileName, callback, errorCallback) {
  let source = fs.createReadStream(filename);
  let destination = fs.createWriteStream(fileName + ".gz");
  let gzipper = zlib.createGzip();

  source
    .on("error", errorCallback)
    .pipe(gzipper)
    .pipe(destination)
    .on("error", errorCallback)
    .on("finish", callback);
}

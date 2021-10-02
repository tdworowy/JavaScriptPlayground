const stream = require("stream");

class GrepStream extends stream.Transform {
  constructor(pattern) {
    super({ decodeStrings: false });
    this.pattern = pattern;
    this.incompletLine = "";
  }
  _transform(chunk, encoding, callback) {
    if (typeof chunk !== "string") {
      callback(new Error("Expected string"));
      return;
    }
    let lines = (this.incompletLine + chunk).split("\n");
    this.incompletLine = lines.pop();
    let output = lines.filter((l) => this.pattern.test(l)).join("\n");
    if (output) {
      output += "\n";
    }
    callback(null, output);
  }
  _flush(callback) {
    if (this.pattern.test(this.incompletLine)) {
      callback(null, this.incompletLine + "\n");
    }
  }
}
let pattern = new RegExp(process.argv[2]);
process.stdin
  .setEncoding("utf8")
  .pipe(new GrepStream(pattern))
  .pipe(process.stdout)
  .on("error", () => process.exit());

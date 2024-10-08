// https://www.youtube.com/watch?v=sRWE5tnaxlI&list=PL4bRyXZPu_BBlcjQwaTGe8TXqaUzXVeYK&index=6&t=938s

fs = require("fs");

const zero = "+[]";
const one = "+!![]";

const number = (n) => {
  if (n === 0) return zero;
  return Array.from({ length: n }, () => one).join(" + ");
};

const map = {};

const fromString = (s) =>
  s
    .split("")
    .map((x) => {
      if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString("constructor")}][${fromString(
          "fromCharCode"
        )}](${number(charCode)})`;
      }
      return map[x];
    })
    .join("+");

map.a = `(+{}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[" "] = `({}+[])[${number(7)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;
map.S = `([]+([]+[])[${fromString("constructor")}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString("constructor")}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString("constructor")}])[${number(14)}]`;
map["\\"] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString("toString")}](${number(14)})`;
map.h = `(${number(17)})[${fromString("toString")}](${number(18)})`;
map.m = `(${number(22)})[${fromString("toString")}](${number(23)})`;
map.C = `((()=>{})[${fromString("constructor")}](${fromString(
  "return escape"
)})()(${map["\\"]}))[${number(2)}]`;

const compile = (code) =>
  `(()=>{})[${fromString("constructor")}](${fromString(code)})()`;

const args = process.argv;

const imputFile = args[2];
const oputputFile = imputFile.replace(/^([^.]*)\.(.*)$/, "$1.jsfck.$2");

fs.readFile(imputFile, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  const jsfck = compile(data);
  fs.writeFile(oputputFile, jsfck, function (err) {
    if (err) return console.log(err);
  });
});

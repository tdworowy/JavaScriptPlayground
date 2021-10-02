//pesudo type objects
let uint8 = {
  [Symbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  },
};
console.log(128 instanceof uint8);
console.log(256 instanceof uint8);

class Range {
  get [Symbol.toStringTag]() {
    return "Range";
  }
}
let r = new Range(1, 100);
console.log(Object.prototype.toString.call(r));

let array_like = {
  length: 1,
  0: 1,
  [Symbol.isConcatSpreadable]: true,
};
console.log(["A"].concat(array_like));

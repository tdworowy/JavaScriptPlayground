const map = (arrayArg, ...args) => {
  return arrayArg.map(...args);
};
const reduce = (arrayArg, ...args) => {
  return arrayArg.reduce(...args);
};

const sum = (x, y) => x + y;
const square = (x) => x * x;

let data = [1, 1, 2, 3, 5, 6, 3, 1, 2];

let mean = reduce(data, sum) / data.length;
let deviation = map(data, (x) => x - mean);

let stdev = Math.sqrt(reduce(map(deviation, square), sum) / (data.length - 1));

console.log(stdev);

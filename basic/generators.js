function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}
function* fibonaci() {
  let x = 0,
    y = 1;
  while (true) {
    yield y;
    [x, y] = [y, x + y];
  }
}
function* zip(...iterables) {
  let iterators = iterables.map((i) => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    if (index >= iterators.length) {
      index = 0;
    }
    let item = iterators[index].next();
    if (item.done) {
      iterators.splice(index, 1);
    } else {
      yield item.value;
      index++;
    }
  }
}
function* sequence(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}
let gen = range(1, 10);
console.log(gen.next().value);
console.log(gen.next().value);

console.log([...range(1, 10)]);

var fib = fibonaci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

console.log([...zip([1, 2, 3], ["a", "b", "c"])]);
console.log([...sequence([1, 2, 3], ["a", "b", "c"])]);

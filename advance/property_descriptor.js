let descriptor1 = Object.getOwnPropertyDescriptor({ x: 1 }, "x");
console.log(descriptor1);

let obj = {};
Object.defineProperty(obj, "x", {
  value: 2,
  writable: true,
  enumerable: false,
  configurable: true,
});

let descriptor2 = Object.getOwnPropertyDescriptor(obj, "x");
console.log(descriptor2);

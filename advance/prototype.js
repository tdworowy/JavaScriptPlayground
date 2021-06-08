let p1 = {x:1, y:"abc"}
let o1 = Object.create(p1)

console.log(p1.isPrototypeOf(o1))
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Object.prototype.isPrototypeOf(o1))



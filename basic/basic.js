// Destructung assigment 
let [x1,y1] = [1,2]
console.log(`${x1} ${y1}`)

let [x2,y2] = [1,2,3]
console.log(`${x2} ${y2}`)

let [x3,,y3] = [1,2,3]
console.log(`${x3} ${y3}`)

let [x4,...y4] = [1,2,3]
console.log(`${x4} ${y4}`)

let color = {r:0.0,g:200.0,b:15.0}
let {r,g,b} = color
console.log(`${r} ${g} ${b}`)
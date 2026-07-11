const counter = ((i = 0) => () => ++i)()

console.log(counter());
console.log(counter());
console.log(counter());
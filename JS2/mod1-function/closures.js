const counter = ((i = 0) => () => ++i)()

console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
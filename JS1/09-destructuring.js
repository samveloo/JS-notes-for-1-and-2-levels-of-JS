//destructuring
let arr = ["Привет", 23, 43, 54];
let obj = { name: "Вася", age: 23 };

let [word, num, ...params] = arr; //word = привет, num = 23, params = все остальные значения
let { name, age } = obj; //name = вася, age = 23
let { name: firstName, age: возраст } = obj;

console.log(word, num);
console.log(params);
console.log(name, age);
console.log(firstName, возраст);
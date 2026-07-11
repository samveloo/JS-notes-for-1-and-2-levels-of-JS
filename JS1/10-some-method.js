console.log(100 / 0); //Infinity
console.log(isFinite(100 / 0)); //вызывает false, если чисто без конечное, а true когда конечное
console.log(isFinite(10 / 3)); //true
console.log(100 / 0 == Infinity); //true
console.log(Infinity == Infinity); //true
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(typeof Infinity); //Number

console.log(NaN == NaN); //false
console.log("qwe" - 23); //NaN
console.log("qwe" - 23 == NaN); //false
console.log(isNaN("qwe" - 23)); //true

const str = 'b' + 'a' + + 'a' + 'a';
console.log(str.toLowerCase());

console.log(Number);

console.log(parseFloat("23.5кг")); //дробная часть //23.5
console.log(parseInt("23.5кг")); //целая часть //23
console.log(parseInt("f", 16)); //15
console.log(parseInt("ff", 16)); //255
console.log(parseInt("ffffff", 16)); //16777215

let p = prompt('Как вас зовут?', 'Гость');
alert(`Привет, ${p}`)
console.log('Hello, World');

/* переменные var let const
типы данных
 
string 'John' "Smith" `Doe` //строчное значение
number 1000 36.6 1e5 1e-5 //числовое значение
boolean true false //правда ложь
undefined undefined //неопределенные значения
null null //пустое значение
object {name: 'John'} и т.д. //сложные структуры
bigint 100n //большое целое
symbol //неизменяемые свойства обектов
*/

const name = "John";
let salary = 100000;
var isProgramer = true;
console.log(name, salary, isProgramer);

/*let a = 0, A = 1;
console.log(a, A);*/

console.log(typeof name); //показывает базу данных

//операторы
//математические
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 + 3);
console.log(10 % 3); //остаток
console.log(10 ** 3); //степень

console.log( Math.round(36.6) );
console.log( Math.ceil(36.6) );
console.log( Math.floor(36.6) );

//работа со строками
console.log("привет" + "мир!"); //приветмир!
console.log("привет" + " мир!"); //привет мир!
console.log("привет" + ' ' + " мир!"); //привет мир!
console.log("5" + 3); //53
console.log(+"5" + 3); //8
console.log("5" - 3); //2
console.log("5кг" + 3); //5кг3
console.log("5кг" - 3); //NaN
console.log(typeof NaN); //number
let num1 = 5;
console.log(!num1); //false

//логические
console.log(!true); //отрицание, false
console.log(!false); //отрицание, true
console.log(!0); // true
console.log(!""); //true
console.log(!!0); //false
console.log(!!""); //false

//логическое ИЛИ
console.log(false || false); //false
console.log(false || true); //true
console.log(true || false); //true
console.log(true || true); //true
//логическое УМНОЖЕНИЕ
console.log(false && false); //false
console.log(false && true); //false
console.log(true && false); //false
console.log(true && true); //true
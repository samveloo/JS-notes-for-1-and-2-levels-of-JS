console.log("Привет, мир!");

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

const w = 20; //ширина
const l = 15; //длина
let s = 0; //площадь
s = w * l;
console.log("Площадь: ", s);
console.log(`Площадь: ${s}`); //работа с шаблонами строк

//операторы if else
if (true) {
    console.log("Изучить JS!");
} else {
    console.log("Работать!"); //если в if одно, то в else другое
}

//операторы сравнения
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(5 > 0); //true
console.log(5 < 0); //false
console.log(5 >= 0); //true
console.log(5 <= 0); //false
console.log(5 != 0); //true 

let n = 42;
if (n > 50) {
    console.log(`n = ${n} - больше 50`);
} else {
    console.log(`n = ${n} - меньше 50`);
}

//четное, нечетное
let m = 35;
if (m % 2) {
    console.log(`Число ${m} - нечетное`);
} else {
    console.log(`Число ${m} - четное`);
}

//оператор Switch
let day = 3;
let menu = "";

switch (day) {
    case 1:
        menu = "борщ";
        break;
    case 2:
        menu = "яйца";
        break;
    case 3:
        menu = "каша";
        break;
}
console.log(day, menu);

var i = 0;
i++; //сначала пишет значение, а потом добавляет
console.log(i); //1

var i = 0;
++i; //сначала добавяет, а потом пишет значение
console.log(i); //1

var i = 0;
console.log(--i); //-1

//все нечетные числа от 0 до 10
let g = 1;
while (g < 10) {
    console.log(g);
    g += 2; //g = g + 2
}

//перечисляет от 0 до 5
for (let i = 0; i < 5; i++) {
    if (i == 3) break; //прекрощает работу после 3
    console.log(i);
}

//континью прерывает операцию
for (let i = 0; i < 5; i++) {
    if (i == 0) continue; //пропускает 0
    console.log(i);
}

//цикл, который выводит елочку
for (let n = "*"; n <= "*********"; n = n + "**") {
    console.log(n);
}

//цикл, сначала сделай, а потом подумай
let d = 0;
do {
    d++;
    console.log(d);
} while (d < 5);

//пифогорова таблица от 1 до 10
let pythagoras = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        pythagoras += i * j + "\t";
    }
    pythagoras += "\n";
}

console.log(pythagoras);

//выподающий список с 10 опцией
let select = "<select>\n";

for (let i = 1; i <= 10; ++i) {
    select += `\t<option>${i}\n`;
}

select += "</select>";
console.log(select);
//document.write(select) //выподающий список

//квадраты чисел от 12 до 23
for (let i = 12; i <= 23; i++) {
    console.log(i ** 2);
}

//описание функции
function sum(a, b) {
    return a + b; //после этого больше ничего не происходит
}

//вызов функции
console.log(sum());

let nnn = sum(10, 20); //a = 10, b = 20
console.log(nnn);

//четное - false, нечетное - true
function isodd(n) {
    if (n % 2) {
        return true;
    } else {
        return false;
    }
}
console.log(isodd(12)); //false
console.log(isodd(5)); //true
console.log(isodd); //будет описание функции

const mul = function (a, b) {
    return a * b;
};
console.log(mul(2, 3)); //6

const div = (a, b) => a / b; //это тоже функция

const qwer = (a, b) => a * b;
console.log(qwer(20, 30));

//замыкания
function fn() {
    let i = 0;

    function fnNext() {
        return ++i;
    }
    return fnNext;
}
//aaa = fnNext = результатом вызова fn
const aaa = fn();
//aaa2 = fn, то есть ссылку на fn
const aaa2 = fn;
//res = результатом вызова fnNext = 1
const res = aaa();

//аргументы
function suma() {
    //console.log(arguments.length); //показывает кол. элементов //3
    //console.log(arguments[1]); //20

    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
//                 0  1  2
console.log(suma(10, 20, 30)); //60

function suma2(...a) {
    //в а входит все элементы
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        res += a[i];
    }
    return res;
}
console.log(suma2(10, 20, 30));

function avg(...a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s / a.length;
}
console.log(avg(45, 75, 12));

function next(n) {
    if (n > 0) next(n - 1); //если не поставим n > 0, то будет ошибка
    console.log(n);
}
next(10);

let firstnames = "john";
let weight = 80;
let = isProgramer = true;

//создание обьекта
let user1 = {
    firstname: "john",
    weight: 80,
    isProgramer: true,
    say: function () {
        return `Привет, я ` + this.firstname; //this нужно
    },
    whoIsThis: function () {
        return this;
    },
};

//проверка типа данных
console.log(typeof user1); //object

console.log(user1);
//обращение к свойству объекта
console.log(user1.firstname); //john
console.log(user1.say());

//как пройти по все св-вам объекта
if ("weight" in user1) {
    //in спрашивает есть ... в ...
    console.log("Свойство есть!");
} else {
    console.log("Этого свойства нету");
}

for (let p in user1) {
    console.log(p); //firstname weight isProgramer say
}

var a = 1,
    b;
b = a;
console.log(a, b); //5  1

Object.assign({}); //имеет теже свойства, но они не равны

const user3 = {
    firstname: "katy",
    say: user1.say,
};
console.log(user3.say());

let car = {
    model: "kia",
    toString: function () {
        //toString превращает объект в строичку
        return this.model;
    },
};

function chengeColor(color) {
    //пока вызова нету this не сработает
    this.color = color;
}

chengeColor.apply(car, ["red"]);

console.log(car + "");

//массивы
//           0   1   2
let arr1 = [10, 46, 20];
console.log(arr1);
console.log(arr1.length); //3
console.log(typeof arr1); //Object

console.log(arr1[1]); //это индекс //46

//последовательнось из 23 цифр
let fib = [0, 1];
const ppp = 23;
for (let i = 2; i < ppp; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

let arr2 = [5, 9, 12, 3, 1];
console.log(arr2 + ""); //получаеться строка
console.log(arr2.toString()); //получаеться строка
console.log(arr2.concat(100, 200)); //concat добовляет значениние к массиву
console.log(arr2); //уже не добовляет

console.log(arr2.pop()); //убирает последнее значение

let arr3 = ["катя", "олег", "яна", "коля"];
console.log(arr3.sort()); //sort сортирирует все по алфавиту
console.log(arr3);

let arr4 = [112, 87, 95, 34, 65, 33];
console.log(arr4.sort((a, b) => a - b)); //сортирировка чисел по порядку
console.log(arr4);

let arr5 = [112, 87, 95, 34, 65, 33];
arr5.forEach(function (item) {
    //выводит все элементы
    console.log(item); //112 87 95 34 65 33
});

let arr6 = [1, 2, 3, 4, 5];
arr6.forEach(function (item) {
    console.log(item);
});
for (i = 0; i <= 105; ++i) {
    console.log(i);
}

//конструкторы
function User(name, weight) {
    this.name = name;
    this.weight = weight;
}
let USER1 = new User("jonh", 80); //new создает объект //User {}
let user2 = new User("katy", 60);
console.log(USER1, user2);
console.log(typeof USER1);
console.log(USER1.name);

//get //он вызывается сам, когда он нужен

let arr = ["привет", 23];
let obj = { firstname: "вася", age: 32 };

let [word, num /*...params*/] = arr;
let { firstname, age } = obj;
let { firstname: fs, age: qwe } = obj;

console.log(word, num);
//console.log(params);
console.log(firstname, age);
console.log(fs, qwe);

console.log(100 / 0);
console.log(isFinite(100 / 0));
console.log(isFinite(10 / 3));
console.log(Number.MAX_VALUE);
console.log(typeof Infinity);

console.log(parseFloat("23.5кг")); //дробная часть //23.5
console.log(parseInt("23.5кг")); //целая часть //23

//         0123456789
let str = "ехал грека через реку";
console.log(str.length); //21

console.log(str.charAt(0)); //е
console.log(str[0]); //е
console.log(str.charCodeAt(0)); //1077
console.log(str.indexOf("ре")); //6 позиция
console.log(str.indexOf("ре", 7)); //13 позиция
console.log(str.indexOf("ре", 14)); //17 позиция
console.log(str.indexOf("ре", 18)); //-1 позиция

console.log(str.startsWith("ре")); //false //есть ли в начале
console.log(str.endsWith("ре")); //false //есть ли в середине
console.log(str.includes("ре")); //true //есть ли в конце

console.log(str.concat("123")); //ехал грека через реку123
console.log(str + "123"); //ехал грека через реку123
console.log(str); //ехал грека через реку

//разделитель split
console.log(str.split(" "));
console.log(str.split("").join("-"));
console.log(str.split("ре"));

console.log(str.slice(6, 8));

console.log(str.toLowerCase()); //ехал грека через реку
console.log(str.toUpperCase()); //ЕХАЛ ГРЕКА ЧЕРЕЗ РЕКУ

console.log(str.repeat(3)); //повторяет текст 3 раза

console.log(str.replace("ре", "ле")); //заменяет ре на ле //делает только 1 замену
console.log(str.replaceAll("ре", "ле")); //заменяет все

//даты
const dt1 = new Date("23 jan 2025");
const dt2 = new Date(3345678965445);
const dt3 = new Date(2022, 2, 1, 10, 15, 45); //1 марта 2022

console.log(dt3.getDate());
console.log(dt3.getDay());
console.log(dt3.getMonth());
console.log(dt3.getFullYear());
console.log(dt3.getTime());

dt3.setFullYear(2025); //устанавливает 2025 год

console.log(dt1);
console.log(dt2);
console.log(dt3);

console.log(dt3.toLocaleDateString()); //01.03.2025
console.log(dt3.toLocaleTimeString()); //10:15:45
console.log(dt3.toLocaleString()); //01.03.2025, 10:15:45

//JSON
let json = `[
    {"title": "book1", "price": 1000 },
    {"title": "book2", "price": 2000 }
]`;

console.log(typeof json);
console.log('"' + json + '"');

console.log(JSON.parse(json));
let arrJ = JSON.parse(json); //теперь это масссив (2) //[{…}, {…}]

console.log(JSON.stringify(arrJ)); //а это наоборот, что бы отправить

//let num = prompt("Введите число", "10");
try {
    let err1 = new Error("Ошибка...");
    //console.log(err1);
    /* if (num === "") */ throw err1;
    console.log("Попытка работы..."); //после 3 строки работа прекрошается
} catch (err) {
    console.log(err.message);
}
console.log("Попытка работы2...");

const re1 = /\d{2}\.\d{2}\.\d{4}/;

console.log(re1.test("23.11.2025"));
console.log(re1.test("07.06.2025"));
console.log(re1.test("05-03-2025"));
console.log(re1.test("00.99.222222"));

console.log("Ехал Грека".replace(/ре/gi, "ле"));
console.log("Ехал Грека".replace(/([а-яё]+) ([а-яё]+)/gi, "$2 $1"));

const re4 = /(20\d{2})\.(\d?\d)\.(\d?\d)/;
console.log("2025.23.11".replace(re4, "$3-$2-$1"));
console.log("2025.07.06".replace(re4, "$3-$2-$1"));
console.log("2025.05.03".replace(re4, "$3-$2-$1"));

console.log("пр".repeat(2)); // Вывод: "прпр"

console.log("пр".repeat(2).trim()); // Вывод: "пр пр"

/*

пояснения символов в регулярных выражениях

[a-z] - один из символов от a до z
[0-9] - один из символов от 0 до 9
[2348] - один из символов 2, 3, 4, 8
. - любой символ кроме пробельного
\. - именно символ точки
\w - [0-9a-z_] - один из символов от 0-9, или a-z, или подчеркивание
\d - тоже самое, что [0-9]
а{4} - четыре символа а
() - групировка
(ма){2} - слово "мама"
ма{2} - слово "маа"
(4|5) - только один из вариантов - 4 или 5
(ма|па) - только один из вариантов - ма или па
q{5} - слово qqqqq
q{2,} - слово из двух или более букв q
q{2,5} - слово из двух, трех, четырех, или пяти букв q
q{,5} - слово не более чем из пяти букв q
q{0,1} - или есть буква q или нету
q? - или есть буква q или нету
q+ - это тоже самое что q{1,}
q* - это тоже самое что q{0,}
\s - пробельный символ

*/

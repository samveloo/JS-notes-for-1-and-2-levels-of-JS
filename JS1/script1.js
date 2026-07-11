//описание функции
function sum(a, b) {
    return a + b; //после этого больше ничего не происходит
}
//вызов
console.log(sum());
let i = sum(10, 12);
console.log(i);

function isOdd(n) {
    if (n % 2) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(12)); //false
console.log(isOdd(5)); //true
console.log(isOdd); //будет описание функции

const mu1 = function (a, b) {
    return a * b;
};
console.log(mu1(2, 3)); //6

const isOdd3 = function (n) {
    if (n % 2) {
        return true;
    } else {
        return false;
    }
};

console.log(isOdd3(12)); //false
console.log(isOdd3(5)); //true

//декларативная функция
function tr(a, b) {
    return a * b;
}
console.log(tr(2, 4));
console.log(tr(9, 2));

//стрелочная
const divv = (a, b) => a / b;

console.log(divv(6, 2));

const divvt = (a, b) => {
    //...
    return a / b;
};

const isOdd4 = (n) => {
    if (n % 2) return true;
    return false;
};

console.log(isOdd4(12)); //false
console.log(isOdd4(5)); //true

const isOdd5 = (n) => (n % 2 ? true : false);

console.log(isOdd5(12)); //false
console.log(isOdd5(5)); //true

const isOdd6 = (n) => !!(n % 2);

console.log(isOdd6(12)); //false
console.log(isOdd6(5)); //true

const sqare = (wi, he) => wi * he;
console.log(sqare(20, 30));

//моментальный вызов безымянной функции
(function (a, b) {
    return a * b;
})(10, 20);

let a1 = (function (a, b) {
    return a * b;
})(20, 30);

let a2 = (function (a, b) {
    return a * b;
})(30, 40);

console.log(a1, a2); //a1, a2 имеют значение функции, то есть а1 = 600, а2 = 1200

let a3 = 1, b3 = 2, c3 = 3
function f(b = 22) {
    let c = 333
    console.log(a, b, c);
}
f()

function foo(x) {
    return function () {
        return x + 2;
    };
}

let t = foo(100);
console.log(t);
console.log(t()); //102

//мой способ
function con(a) {
    return function () {
        return a++;
    };
}
const count = con(0);
console.log(count()); //0
console.log(count()); //1
console.log(count()); //2
console.log(count); //ссылка на функцию

//суперсокращенный способ
const counter2 = (
    (ir = 0) =>
        () =>
            ir++
)();
console.log(counter2()); //0
console.log(counter2()); //1
console.log(counter2()); //2

// формула для нахождения цифрового корня
// ! (n - 1) % 9 + 1 

//старый способ
function sum2() {
    //console.log(arguments.length) //3
    //console.log(arguments[1]); //20
    let resaut = 0;

    for (let i = 0; i < arguments.length; i++) {
        resaut += arguments[i];
    }

    return resaut;
}
//                0   1   2
console.log(sum2(10, 20, 30));

//новый способ
function sum2(...a) {
    let resaut = 0;

    for (let i = 0; i < a.length; i++) {
        resaut += a[i];
    }

    return resaut;
}
console.log(sum2(10, 20, 30)); //60

function avg(...a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s / a.length;
}
console.log(avg(45, 75, 12));
console.log(avg(10, 20, 30));

function next(n) {
    if (n > 0) next(n - 1);
    console.log(n);
}
next(10);

//создание обьекта
let user1 = {
    firstname: "john",
    weight: 80,
    isProgramer: true,
    say: function () {
        return `Привет, я ${this.firstname} `; //или return `Привет, я ` + this.firstname
    },
    whoIsThis: function () {
        return this;
    },
};
console.log(user1.firstname);
console.log(user1["firstname"]);
console.log(user1.say());

//как пройти по все св-вам объекта
if ("weight" in user1) {
    //in спрашивает есть ... в ...
    console.log("Свойство есть!");
} else {
    console.log("Этого свойства нету");
}

for (let p in user1) {
    console.log(p, user1[p]);
}

var a = 1,
    b;
b = a;
a = 5;
console.log(a, b); //5  1

let user4 = Object.assign({}, user1);
console.log(user4);
user4.isProgramer = false;
console.log(user4);
console.log(user1);
console.log(user1 == user4);

const user3 = {
    firstname: "katy",
    say: user1.say,
    whoIsThis: user1.whoIsThis,
};
console.log(user3.say());
console.log(user3.whoIsThis());

function chengeColor(color) {
    this.color = color;
}

let car = {
    model: "Mersedes",
    toString: function () {
        return this.model;
    },
};

chengeColor.apply(car, ["red"]);
chengeColor.call(car, "green");
const setColor = chengeColor.bind(car);
setColor("blue");

console.log(car + "");

//массивы
//           0   1   2
let arr1 = [10, 46, 20];
console.log(arr1);
console.log(arr1.length); //3
console.log(typeof arr1); //Object

console.log(arr1[1]); //это индекс //46

let fib2 = [2, 3];
let nn2 = 10;
for (let pp2 = 2; pp2 < nn2; pp2++) {
    fib2[pp2] = fib2[pp2 - 1] + fib2[pp2 - 2];
}
console.log(fib2.toString());

let arr7 = [5, 9, 12, 3, 1];
console.log(arr7 + ""); //получаеться строка
console.log(arr7.toString()); //получаеться строка
console.log(arr7.concat(255, 16)); //добовляет значение, но исходный не изменяется
console.log(arr7);

console.log(arr7.pop()); //убирает последнее значение
console.log(arr7);
console.log(arr7.push(21, "строка")); //добовляет значения в конец
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);
console.log(arr7.unshift(10, "яблоко"));
console.log(arr7);

console.log(arr7.slice(0)); //возврощает новый массив у которого все элементы совподают с предыдущем но они не равны
console.log(arr7.slice(0) == arr7);
console.log(arr7.slice(0, 2));
console.log(arr7.slice(-1));
console.log(arr7.reverse()); //разворачивет элементы задом наперед и исходный массив тоже изменяется
console.log(arr7);

console.log(arr7.splice(2, 2, "admin"));
console.log(arr7);

let arr8 = ["катя", "олег", "яна", "коля"];
console.log(arr8.sort()); //sort сортирирует все по алфавиту
console.log(arr8);

let arr9 = [112, 87, 95, 34, 65, 33];
console.log(arr9.sort((a, b) => a - b));
console.log(arr9);

let arr10 = [
    { name: "Катя", sex: "W" },
    { name: "Коля", sex: "M" },
    { name: "Олег", sex: "M" },
    { name: "Яна", sex: "W" },
];
arr10.sort((a, b) => {
    if (a.sex == "M") return -1;
    return 1;
});
console.log(arr10);

let arr11 = [112, 87, 95, 34, 65, 33];
arr11.forEach((item) => console.log(item));

let arr12 = arr11.map((item) => item * 10);
console.log(arr12);

arr13 = [];
for (let i = 0; i < 5; i++) {
    arr13.push(Math.round(Math.random() * 100));
}
arr13.forEach((item) => console.log(item));

arr14 = [];
for (let i = 0; i < 105; i++) {
    arr14.push(Math.round(Math.random() * 100));
}
console.log(arr14);

arr14.sort((a, b) => a - b);
console.log(arr14);

function hello1() {
    return "Привет, JavaScript!";
}
console.log(hello1());

function hello2(name) {
    if (name === undefined) return "Привет, гость";
    return `Привет, ${name}`;
}
console.log(hello2());
console.log(hello2("Василий"));
console.log(hello2("Анна"));
//или
function hello3(name = "гость") {
    return `Привет, ${name}`;
}
console.log(hello3());
console.log(hello3("Иван"));
console.log(hello3("Саша"));

function mul1(n, m) {
    return n * m;
}
console.log(mul1(3, 8));

function rgb(R, G, B) {
    if (R === undefined) R = 0;
    if (G === undefined) G = 0;
    if (B === undefined) B = 0;

    if (R > 255) R = 255;
    if (G > 255) G = 255;
    if (B > 255) B = 255;

    if (R < 0) R = 0;
    if (G < 0) G = 0;
    if (B < 0) B = 0;

    return `rgb(${R},${G},${B})`;
}
console.log(rgb(240, 127, 66));

//oop
//классы
class User {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    say1() {
        return `Привет, я ${this.name} и вешу ${this.weight} кг`;
    }
}

class Admin extends User {
    //extends для наследования
    constructor(name, weight, role) {
        super(name, weight);
        this.role = role;
    }
}

let user5 = new User("Jonh", 80);
let user6 = new User("Katy", 60);

console.log(user5.say1(), user6.say1());
console.log(user5.name); //john

let user7 = new Admin("Smith", 70, "spy");
console.log(user7);
console.log(user7.say1());

// ! полезно в классах, что бы вызывать свойство и значение
/*
show(){
    for(let p in this){
        return `${p}: ${this[p]}`;
    }
*/

class Goods {
    constructor(title, price, tax) {
        this.title = title;
        this.price = price;
        this.tax = tax;
    }

    get priceWithTax() {
        return this.price + (this.price * this.tax) / 100;
    }

    show() {
        let resaut = "";

        for (let prop in this) {
            resaut += `${prop}: ${this[prop]}\n`;
        }

        return resaut;
    }

    static create(title, price, tax) {
        return new Goods(title, price, tax);
    }
}

class Phone extends Goods {
    constructor(title, price, tax) {
        super(title, price, tax);
        this.type = "смартфон";
    }
}

let goods1 = new Goods("JS", 50, 18);
console.log(goods1.show());

let phone1 = Phone.create("Redmi", 500, 20); //блягодаря static
console.log(phone1.show());

let goods = [];
goods.push(goods1, phone1, new Phone("iPhone", 1500, 20));
console.log(goods);

console.log("Цена c налогом для " + goods1.title + ": " + goods1.priceWithTax);
console.log("Цена c налогом для " + phone1.title + ": " + phone1.priceWithTax);

//destructuring
let arr = ["привет", 23, 43, 54];
let obj = { name: "вася", age: 23 };

let [word, num, ...params] = arr; //word = привет num = 23 params = все остальные значения
let { name, age } = obj; //name = вася age = 23
let { name: firstName, age: возраст } = obj;

console.log(word, num);
console.log(params);
console.log(name, age);
console.log(firstName, возраст);

//some-metods
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

console.log(parseFloat("23.5кг")); //дробная часть //23.5
console.log(parseInt("23.5кг")); //целая часть //23
console.log(parseInt("f", 16)); //15
console.log(parseInt("ff", 16)); //255
console.log(parseInt("ffffff", 16)); //16777215

//string
//         0123456789
let str = "Ехал Грека через реку";
console.log(str.length); //21

console.log(str.charAt(0)); //Е
console.log(str[0]); //Е
console.log(str.charCodeAt(0)); //1045

console.log(str.indexOf("ре")); //6 позиция
console.log(str.indexOf("ре", 7)); //13 позиция
console.log(str.indexOf("ре", 14)); //17 позиция
console.log(str.indexOf("ре", 18)); //-1 позиция

console.log(str.lastIndexOf("ре")); //17
console.log(str.lastIndexOf("ре", 16)); //13
console.log(str.lastIndexOf("ре", 12)); //6
console.log(str.lastIndexOf("ре", 5)); //-1

console.log(str.startsWith("ре")); //false //есть ли в начале
console.log(str.endsWith("ре")); //false //есть ли в конце
console.log(str.includes("ре")); //true //есть ли в середине

console.log(str.concat("123")); //Ехал Грека через реку123 //не сохраняется основная строка
console.log(str + "123"); //Ехал Грека через реку123
console.log(str); //Ехал Грека через реку

//разделитель split
console.log(str.split(" "));
console.log(str.split("")); /* .join('-') */
console.log(str.split("ре"));

console.log(str.slice(6, 8));

console.log(str.toLowerCase()); //гхал грека через реку
console.log(str.toUpperCase()); //ЕХАЛ ГРЕКА ЧЕРЕЗ РЕКУ

console.log(str.repeat(3)); //повторяет текст 3 раза

console.log(str.replace("ре", "ле")); //заменяет ре на ле //делает только 1 замену
console.log(str.replaceAll("ре", "ле")); //заменяет все

function substrCount(needle, haystack, offset, length) {
    let part = haystack.substring(offset, offset + length);
    let count = 0;
    let pos = part.indexOf(needle);

    while (pos !== -1) {
        count++;
        pos = part.indexOf(needle, pos + 1);
    }

    return count;
}

let num2 = substrCount("ре", "Ехал Грека через реку", 5, 15);
console.log(num2); //3

//date
const dt4 = new Date("23 jan 2025");
const dt5 = new Date(3345678965445); //1 января 1970
const dt6 = new Date(2022, 2, 1, 10, 15, 45); //1 марта 2022
const dt7 = new Date(2022, 0, 41, 10, 15, 45); //10 февраля 2022

console.log(dt7.getDate());
console.log(dt7.getDay());
console.log(dt7.getMonth());
console.log(dt7.getFullYear());
console.log(dt7.getTime());

dt7.setFullYear(2025);

console.log(dt4);
console.log(dt5);
console.log(dt6);
console.log(dt7);

console.log(dt7.toLocaleDateString()); //10.02.2025
console.log(dt7.toLocaleTimeString()); //10:15:45

console.log(
    Date.parse("Mon Feb 10 2025 10:15:45 GMT+0300 (Москва, стандартное время)")
); //1739171745000
console.log(new Date(1739171745000)); //это равно dt7
console.log(Date.UTC(2022, 0, 1)); //1640995200000

const daysBeforeHNY = (dt) => {
    let year = dt.getFullYear();
    let HNY = new Date(year + 1, 0);
    return (HNY - dt) / (1000 * 60 * 60 * 24);
};

console.log(daysBeforeHNY(new Date()));

//JSON
let json = `[
    {"title": "book1", "price": 1000 },
    {"title": "book2", "price": 2000 }
]`;

console.log(typeof json);
console.log('"' + json + '"');

console.log(JSON.parse(json));
let arr15 = JSON.parse(json); //теперь это масссив (2) //[{…}, {…}]

console.log(JSON.stringify(arr15)); //а это наоборот, что бы отправить

//Error
function checkNumber(num3) {
    if (num3 > 100) {
        throw new Error("Число больше 100");
    } else {
        return "Число принято";
    }
}
try {
    console.log(checkNumber(34));
    console.log(checkNumber(123));
} catch (e) {
    console.log("Ошибка:", e.message);
}

//регулярные выражения
//const re5 = /\d{2}\.\d{2}\.\d{4}/;
const re6 = /^(0?[1-9]|[12]\d|3[01])\.(0?[1-9]|1[012])\.20\d{2}$/;

console.log(re6.test("3.11.2025"));
console.log(re6.test("07.06.2025"));
console.log(re6.test("05-03-2025"));
console.log(re6.test("00.99.222222"));

const re7 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(re7.test("some@gmail.com"));
console.log(re7.test("some-fio@mail.ru"));
console.log(re7.test("test.test.test@mail.ru"));
console.log(re7.test("milo5@mail.ru"));
console.log(re7.test("test@test@mail.ru"));

const re8 = /(\d{4})\.(\d?\d)\.(\d?\d)/;
console.log("2022.12.23".replace(re8, "$3-$2-$1")); //23-12-2022
console.log("2022.5.7".replace(re8, "$3-$2-$1")); //7-5-2022
console.log("2022.1.31".replace(re8, "$3-$2-$1")); //31-1-2022

/*

! Пояснения символов в регулярных выражениях

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

function fact(n) {
    return n > 0 ? n * fact(n - 1) : 1;
}
console.log(fact(4));

function multiply(...a) {
    let result = 1

    if (a.length === 0) {
        return 0
    }

    for (let i = 0; i < a.length; i++) {
        result *= a[i];
    }



    return result
}

multiply(2, 3, 4) // 24
multiply(5, 2) // 10
multiply() // 0

function createCounter(i = 1) {
    function fn() {
        return i++
    }
    return fn;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

arr = [5, 2, 9, 1, 5, 6];
arr.sort((a, b) => a - b);
console.log(arr);
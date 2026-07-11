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

let a = 1,
    b = 2,
    c = 3;
function f(b = 22) {
    let c = 333;
    console.log(a, b, c);
}
f();

//замыкания
function foo(x) {
    return function () {
        return x + 2;
    };
}
let t = foo(100);
console.log(t);
console.log(t());

//финкциональная запись
function fn() {
    let x = 0;

    return function () {
        return ++x;
    };
}

let q = fn();
console.log(fn());
console.log(q());
console.log(q());

//через безымянную функцию
const counter0 = (function (i = 0) {
    return function () {
        return ++i;
    };
})();

console.log(counter0());
console.log(counter0());
console.log(counter0());

//через стрелки
const counter = ((i = 0) => () => ++i)();
console.log(counter());
console.log(counter());
console.log(counter());

function game() {
    let i = Math.round(Math.random() * 10);
    return function (n) {
        if (i === n) {
            console.log("Верно!");
            i = Math.round(Math.random() * 10);
        } else {
            console.log("Попробуйте еще раз...");
        }
    };
}

const go = game();
//go(n)

//старый способ
function sum2() {
    // console.log(arguments.length) //3
    // console.log(arguments[1]); //20
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

//                0   1   2
console.log(sum2(10, 20, 30));

//современный стиль
function sum3(...a) {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }

    return result;
}

console.log(sum3(10, 20, 30));

const avg = (...a) => {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }

    result /= a.length

    return result;
}

console.log(avg(10, 20, 30));
console.log(avg(2, 2, 2));
console.log(avg(10, 190, 100));

function next(n) {
    console.log(n);
    if (n > 0) next(n - 1)
}
next(10)
//операторы if else
let isKnowJS = false
let hasFreeTime = true

if (!isKnowJS && hasFreeTime) {
    console.log("Изучить JS!");
} else {
    console.log("Работать!"); //если в if одно, то в else другое
}

console.log(!isKnowJS && hasFreeTime ? 'Изучить JS!' : 'Работать!')

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

console.log(m % 2 ? `Число ${m} - нечетное` : `Число ${m} - четное`)

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

let d = 0;
while (d < 5) {
    console.log(d);
    d++;
}

let x = 1
while (x <= 10) {
    console.log(x);
    x += 2;
}

for (let i = 0; i < 5; i++) {
    if (i == 0) continue; //пропускает 0
    if (i == 3) break; //прекращает работу после 3
    console.log(i);
}

//цикл, который выводит елочку
for (let n = "*"; n <= "*********"; n += "**") {
    console.log(n);
}


//цикл, сначала сделай, а потом подумай
let d2 = 0;
do {
    d2++;
    console.log(d2);
} while (d2 < 5);


let d3 = 10;
do {
    d3++;
    console.log(d3);
} while (d3 < 5)

//пифогорова таблица от 1 до 10
let pythagoras = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        pythagoras += i * j + "\t";
    }
    pythagoras += "\n";
}

console.log(pythagoras);

//выподающий список с 31 опцией
console.log('<select>');
for (let i = 1; i <= 31; i++) {
    console.log('    ', `<option>${i}</option>`)
}
console.log('</select>');

//квадраты чисел от 12 до 23
for (let i = 12; i <= 23; i++) {
    console.log(i ** 2);
}
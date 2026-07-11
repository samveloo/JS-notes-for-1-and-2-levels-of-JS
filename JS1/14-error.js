//Error
function checkNumber(num) {
    if (num > 100) {
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

let num = prompt('Input number', 10)
try {
    let err1 = new Error('erorr...');
    //console.log(err1);
    if (num === '') throw err1;
    console.log('попытка работы...');
} catch (err) {
    console.log(err.message);
}
console.log('попытка работы 2...');

const word = ( d = 0) => {
    let word = 'товаров';

    if(d % 100 < 5 || d % 100 > 20){
        if(d % 10 === 1){
            word = 'товар';
        }

        if(d % 10 > 1 && d % 10 < 5){
            word = 'товара'
        }
    }

    return `${d} ${word}`
}
console.log(word());
console.log(word(3));
console.log(word(15));
console.log(word(1));

//мое решение:
const operation1 = (m, n, o) => {
    if(o === '+') return m + n;
    if(o === '-') return m - n;
    if(o === '*') return m * n;
    if(o === '/') return m / n;
}

console.log(operation1(5, 2, '*'));
console.log(operation1(5, 2, '/'));
console.log(operation1(5, 2, '+'));
console.log(operation1(5, 2, '-')); 

//решение препода:
function sum(a, b){
    return a + b;
}

function operation(m, n, o) {
    return o(m, n);
}

console.log(operation(2, 3, (a, b) => a * b));
console.log(operation(2, 3, sum));
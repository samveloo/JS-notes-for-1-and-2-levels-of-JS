let fib = [1, 1];
const ppp = 5;
for (let i = 2; i < ppp; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.join(' '));

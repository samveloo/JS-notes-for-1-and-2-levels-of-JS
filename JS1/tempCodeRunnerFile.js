let fib = [0, 1];
const ppp = 23;
for (let i = 2; i < ppp; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.slice(0, -1).join(' '));
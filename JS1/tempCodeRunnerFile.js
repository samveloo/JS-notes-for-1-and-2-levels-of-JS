function fact(n) {
    return n > 0 ? n * fact(n - 1) : 1;
}
console.log(fact(4));
function fact(n) {
    if (n > 0) return n * fact(n - 1)
    return 1;
}
console.log(fact(4));



function reversePrint(linkedList) {
    if (linkedList.next) {
        reversePrint(linkedList.next)
    }
    
    console.log(linkedList.value);
}

var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

console.log(reversePrint(someList)); 
function sum(a, b){
    return a + b;
}
console.log(sum(3, 5));

/*
function sum2(a) {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
*/

const sum2 = (a) => (b) => (c) => a + b + c
console.log(sum2(3)(5)(9));
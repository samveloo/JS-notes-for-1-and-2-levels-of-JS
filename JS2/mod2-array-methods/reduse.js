const arr = [10, 20, 30, 40, 50]

console.log(arr.reduce(function (prev, curr) {
    console.log(`prev = ${prev}`, `curr = ${curr}`);
    return prev + curr;
}, 0));

const arr2 = ['Ехал', 'Грека', 'через', 'реку']

console.log(arr2.join('').split('ре').length - 1);

console.log(arr2.reduce((p, c) => p + (c.includes('ре') ? 1 : 0), 0));

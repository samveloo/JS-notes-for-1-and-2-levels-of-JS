//           0   1    2
//          -3   -2  -1
let arr1 = [10, 300, 56];
console.log(arr1);
console.log(arr1.length);
console.log(typeof arr1);

console.log(arr1[2]); //56

let fib = [0, 1]
const n = 23
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

let arr2 = [5, 9, 12, 3, 1];
console.log(arr2 + '');
console.log(arr2.toString()); //получаеться строка
console.log(arr2.join(', '));
console.log(arr2.concat(255, 16)); //добовляет значение, но исходный не изменяется

console.log(arr2.pop()); //убирает последнее значение
console.log(arr2);
console.log(arr2.push('строка', 100)); //добовляет значения в конец
console.log(arr2);

console.log(arr2.shift()); //удаляет начало
console.log(arr2);
console.log(arr2.unshift(10, "яблоко")); //добавляет в начало
console.log(arr2);

console.log(arr2.slice(0)); //возврощает новый массив у которого все элементы совподают с предыдущем но они не равны
console.log(arr2.slice(0) == arr2);
console.log(arr2.slice(0, 2));
console.log(arr2.slice(-1));
console.log(arr2.reverse()); //разворачивет элементы задом наперед и исходный массив тоже изменяется
console.log(arr2);

console.log(arr2.splice(1, 5, 700, 500));
console.log(arr2);

let arr3 = ["Настя", "Самвел", "Ольга", "Артур"];
console.log(arr3.sort()); //sort сортирирует все по алфавиту
console.log(arr3);

let arr4 = [112, 87, 95, 34, 65, 33];
console.log(arr4.sort((a, b) => a - b));

console.log(arr4.sort((a, b) => {
    if (a > b) return -1;
    return 1;
}))
console.log(arr4);

let arr5 = [
    { name: "Настя", sex: "F" },
    { name: "Самвел", sex: "M" },
    { name: "Артур", sex: "M" },
    { name: "Ольга", sex: "F" },
];
arr5.sort((a, b) => {
    if (a.sex === "F") return -1;
    return 1;
});
console.log(arr5);

let arr6 = [12, 8, 9, 4, 6, 3];
arr6.forEach((item) => console.log(item))

let arr7 = arr6.map((item) => item * 10)
console.log(arr7);

console.log(arr6 === arr7);

arr8 = [];
for (let i = 0; i < 5; ++i) {
    arr8.push(Math.round(Math.random() * 100))
}
arr8.forEach((item) => console.log(item))

let arr9 = [];
for (let i = 0; i < 105; ++i) {
    arr9.push(Math.round(Math.random() * 100))
}
arr9.sort((a, b) => a - b)
console.log(arr9);
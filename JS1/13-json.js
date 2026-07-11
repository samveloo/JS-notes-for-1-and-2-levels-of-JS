//JSON
let json = `[
    {"title": "book1", "price": 1000 },
    {"title": "book2", "price": 2000 }
]`;

console.log(json);
console.log(typeof json); //string

console.log(JSON.parse(json));
let arr = JSON.parse(json);

console.log(JSON.stringify(arr));
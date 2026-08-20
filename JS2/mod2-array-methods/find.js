const arr = ['Ехал', 'Грека', 'через', 'реку'];

console.log( arr.find( word => word.includes('ре') ) );
console.log( arr.findIndex( word => word.includes('ре') ) );

const users = [
  { id: 1, name: "Sam", balance: 120 },
  { id: 2, name: "Alex", balance: 0 },
  { id: 3, name: "Tom", balance: 560 },
  { id: 4, name: "Kate", balance: 30 }
];

console.log(users.find(item => item.id === 3));
console.log(users.find(item => item.balance === 0));
const user = users.find(item => item.id === 4);
user.balance += 100;

const tasks = [
  { id: 101, title: "HTML", done: true },
  { id: 102, title: "CSS", done: false },
  { id: 103, title: "JS", done: false },
  { id: 104, title: "Node.js", done: false }
];

console.log(tasks.find((item) => item.done === false));
const titleJS = tasks.find((item) => item.title === 'JS');
console.log(titleJS.id)
const titleCss = tasks.find((item) => item.title === 'CSS');
titleCss.done = true;
console.log(tasks);
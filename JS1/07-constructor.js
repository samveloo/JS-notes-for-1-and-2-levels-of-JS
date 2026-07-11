function User(name, weight) {
    this.name = name;
    this.weight = weight;
}
User.prototype.say = function () {
    return `Я ${this.name}, и имею вес ${this.weight} кг`
}

let user1 = new User('Jonh', 80);
let user2 = new User('Katy', 60);
console.log(user1, user2);
console.log(typeof user1);
console.log(user1['name']);
console.log(user1.say());

console.log(User.prototype);

let arr = new Array();
console.log(arr);

Array.prototype.randomSort = function () { };

Array.prototype.items = function () {
    return this.length;
}

function Admin(name, weight, role) {
    User.apply(this, [name, weight]);
    this.role = role;    
}
Admin.prototype = new User();
Admin.prototype.constructor = Admin;

let admin1 = new Admin('Smith', 70, 'spy');
console.log(admin1);
console.log(admin1.say());
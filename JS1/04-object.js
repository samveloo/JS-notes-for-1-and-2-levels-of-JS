/* let firstName = "John";
let weight = 80;
let isProgramer = true; */

//создание обьекта
let user1 = {
    firstName: "John",
    weight: 80,
    say() {
        return `Привет, я ${this.firstName}`
    },
    whoIsThis(){
        return this;
    },
};
user1['isProgramer'] = true; //добовляет значение или [] или через .

//проверка типа данных обьекта
console.log(typeof user1);

console.table(user1);

//обрашение к свойсту обьекта
console.log(user1.firstName);
console.log(user1["firstName"]);
console.log(user1.say());
console.log(user1['say']());

if ( 'weigth' in user1 ) {
    console.log('Свойство есть');    
}

if ( 'суперсила' in user1 ) {
    console.log('Свойство есть');    
} else {
    console.log('Cвойства нету');
}

for( let p in user1 ) {
    console.log(p, user1[p]);
}

var a = 1, b;
b = a;
a = 5;
console.log(a, b); //5 1

var a = {
    num: 1
}, b;
b = a;
a = 5;
console.log(a, b); //5 5

let user2 = Object.assign({}, user1);
console.log(user2);
user2.firstName = 'Johnny'
console.log(user1);
console.log(user1);
console.log(user1 == user2);
console.log(user1 === user2); 

// ! this указывает на объект вызова

console.log(user1.whoIsThis());

const user3 = {
    firstName: 'Katy',
    say: user2.say,
    whoIsThis: user2.whoIsThis,
}

console.log(user3.say());
console.log(user3.whoIsThis());

let car = {
    model: 'Audi',
    toString(){
        return this.model
    },
    fn(){
        return this.model
    }
}

let car2 = {
    model: 'NoAudi',
    fn2: car.fn
}

function changeColor(color) {
    this.color = color
}

changeColor.apply(car, ['gray'])
changeColor.call(car, 'black')
const setColor = changeColor.bind(car)
setColor('white')

console.log(car + "");
console.log(car2.fn2());

//ПР
//Мое решение:
let book1 = {
    title: 'Привет, JS!',
    price: 4000,
    showProps() {
        return [this.title, this.price].join(' - ')
    }
}

let book2 = {
    title: 'Привет, Object!',
    price: 1000,
    showProps: book1.showProps
}

console.log(book1.showProps());
console.log(book2.showProps());

/* let obj = {
    prop1: 'str',
    prop2: 0,
    prop3: true,
    prop4: ["arr"],
    toString() {
        
    }
    }

console.log(obj + ""); */

//Решение препода:

let book3 = {
    title: 'Привет, JS!',
    price: 4000,
    toString() {
        for(let p in this){
            if(typeof this[p] != 'function') {
                console.log(`${p}: ${this[p]}`);
            }
        }
    }
}

let book4 = {
    title: 'Привет, Object!',
    price: 1000,
    toString() {
        for(let p in this){
            if(typeof this[p] != 'function') {
                console.log(`${p}: ${this[p]}`);
            }
        }
    }
}

console.log(book3+'')
console.log(book4+'')
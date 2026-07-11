class User{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    say(){
        return `Я ${this.name}, и имею вес ${this.weight} кг`
    }
}

class Admin extends User{
    constructor(name, weight, role){
        super(name, weight);
        this.role = role;
    }
}


let user1 = new User('Jonh', 80);
let user2 = new User('Katy', 60);

console.log(user1, user2);
console.log(user1.say());

let admin1 = new Admin('Smith', 70, 'spy');
console.log(admin1);
console.log(admin1.say());

class Goods {
    constructor(title, price, tax){
        this.title = title;
        this.price = price;
        this.tax = tax;
    }

    get priceWithTax(){
        return this.price * (100 + this.tax) / 100;
    }

    //'iphone|200000|20'
    set props(p){
        p = p.split('|');
        this.title = p[0];
        this.price = +p[1];
        this.tax = +p[2];
    }

    show(){
        for(let p in this){
            return `${p}: ${this[p]}`;
        }
    }

    static create(title, price, tax){
        return new Goods(title, price, tax)
    }
}

class Phone extends Goods{
    constructor(title, price, type, tax){
        super(title, price, tax);
        this.type = 'Смартфон';
    }
}

let goods1 = new Goods('[какое-то название]', 1500, 18);
console.log(goods1);
console.log(goods1.show());

// let phone1 = new Phone('NoName', 41000, 20)
let phone1 = Phone.create('NoName', 41000, 20)
console.log(phone1);
console.log(phone1.show());

let goods = [];
goods.push(goods1);
goods.push(phone1);
goods.push(new Phone('NoName', 20000, 20));
console.log(goods);

phone1.props = 'iphone|200000|20';

console.log(phone1);

console.log('Цена с налогом составляет: ' + goods1.priceWithTax);
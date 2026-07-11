const book = {
    title: 'JS'
}

const changePrice = function(price) {
    this.price = price;
}

//changePrice.apply(book, [1000]);

//changePrice.call(book, 1000);

const setPrice = changePrice.bind(book);
setPrice(1500);

console.log(book);
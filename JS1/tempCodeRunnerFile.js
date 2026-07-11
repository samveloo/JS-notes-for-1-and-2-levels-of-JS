const getCount = function (str) {
    let counter = 0;
    let arr = str.split("");
    
    for (let item of arr) {
        if ((['a', 'e', 'i', 'o', 'u']).includes(item)) {
            counter += 1;
        }
    }

    return counter;
}
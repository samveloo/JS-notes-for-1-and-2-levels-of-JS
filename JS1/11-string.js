//string
//         0123456789
let str = "Ехал Грека через реку";
console.log(str.length); //21

console.log(str.charAt(0)); //Е
console.log(str[0]); //Е
console.log(str.charCodeAt(0)); //1045

console.log(str.indexOf("ре")); //6 позиция
console.log(str.indexOf("ре", 7)); //13 позиция
console.log(str.indexOf("ре", 14)); //17 позиция
console.log(str.indexOf("ре", 18)); //-1 позиция

console.log(str.lastIndexOf("ре")); //17
console.log(str.lastIndexOf("ре", 16)); //13
console.log(str.lastIndexOf("ре", 12)); //6
console.log(str.lastIndexOf("ре", 5)); //-1

console.log(str.startsWith("ре")); //false //есть ли в начале
console.log(str.endsWith("ре")); //false //есть ли в конце
console.log(str.includes("ре")); //true //есть ли вообще

console.log(str.concat("123")); //Ехал Грека через реку123 //не сохраняется основная строка
console.log(str + "123"); //Ехал Грека через реку123
console.log(str); //Ехал Грека через реку

//разделитель split
console.log(str.split(" "));
console.log(str.split("")); /* .join('-') */
console.log(str.split("ре"));

console.log(str.slice(6, 8));

console.log(str.toLowerCase()); //ехал грека через реку
console.log(str.toUpperCase()); //ЕХАЛ ГРЕКА ЧЕРЕЗ РЕКУ

console.log(str.repeat(3)); //повторяет текст 3 раза

console.log(str.replace("ре", "ле")); //заменяет ре на ле //делает только 1 замену
console.log(str.replaceAll("ре", "ле")); //заменяет все

function substrCount(needle, haystack, offset, length) {
    /* let part = haystack.substring(offset, offset + length);
    let count = 0;
    let pos = part.indexOf(needle);

    while (pos !== -1) {
        count++;
        pos = part.indexOf(needle, pos + 1);
    }

    return count; */

    haystack = haystack.slice(offset, offset + length);
    return haystack.split(needle).length - 1;
}

let num2 = substrCount("ре", "Ехал Грека через реку", 5, 15);
console.log(num2); //3
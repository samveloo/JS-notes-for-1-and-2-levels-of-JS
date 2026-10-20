let img = document.querySelector('img');
const rect = img.getBoundingClientRect();
img.style.position = 'fixed';

let x1 = rect.left;
let n = 0;
let rigthBound = 400;

let t1 = setInterval(() => {
    if (n < rigthBound) {
        n++;
        img.style.left = x1 + n + 'px';
    } else {
        clearInterval(t1);
    }
}, 40)
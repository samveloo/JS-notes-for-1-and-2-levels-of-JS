// my нужен что бы i, step, tick не были глобальными переменными 
function my(i = 0, step = 5, tick = 1000) {
    function a() {
        if (i < step) {
            i++;
            console.log(i);
            setTimeout(a, tick);
        }
    }
    a()
}
my()
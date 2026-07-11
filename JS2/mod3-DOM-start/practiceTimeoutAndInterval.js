function countDown(sec){
    const timer = setInterval(() => {
        console.log(sec);
        --sec;
        if(sec < 0){
            clearInterval(timer)
            console.log('Люблю тебя!')
        }
    }, 1000)
}
//countDown(5); 

function typeMessage(message){
    let index = 0;

    const timer = setInterval(() => {
        console.log(message[index]);
        index += 1;

        if(index === message.length) clearInterval(timer)
    }, 500)
}
//typeMessage('JS')

function customInterval(callback, delay, maxRuns){
    let i = 0;
    function fn(){
        if(i < maxRuns){
            ++i;
            callback();
            setTimeout(fn, delay)
        }
    }
    fn()
}
//customInterval(() => console.log("Привет!"), 1000, 3);

function detonateBomb(delay) {
    console.log(`Фитиль подожжен, у тебя есть ${delay / 1000} секунд...`);
    let timer = setTimeout(() => console.log('Пиздец...'), delay)
    
    return function(){
        clearTimeout(timer);
        console.log('Бомба обезврежена..')
    }
}
//detonateBomb(2000)
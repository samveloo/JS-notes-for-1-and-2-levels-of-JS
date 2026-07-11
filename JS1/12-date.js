const dt1 = new Date('23 dec 2017');
const dt2 = new Date(5798435897720); //1 января 1970
const dt3 = new Date(2022, 2, 1, 10, 15, 45); //1 марта 2022,
const dt4 = new Date(2022, 0, 41, 10, 15, 45); //10 февраля 2022

console.log(dt4.getDate());
console.log(dt4.getDay());
console.log(dt4.getMonth());
console.log(dt4.getFullYear());
console.log(dt4.getTime());

dt4.setFullYear(2026);

console.log(dt1);
console.log(dt2);
console.log(dt3);
console.log(dt4);

console.log(dt4.toLocaleDateString());
console.log(dt4.toLocaleTimeString());

console.log(
    Date.parse("Mon Feb 10 2025 10:15:45 GMT+0300 (Москва, стандартное время)")
); //1739171745000
console.log(new Date(1739171745000));
console.log(Date.UTC(2022, 0, 1)); //1640995200000

function daysBeforeHNY(dt) {
    let year = dt.getFullYear();
    let HNY = new Date(year + 1, 0);
    return Math.trunc((HNY - dt) / (1000 * 60 * 60 * 24));
}
console.log(daysBeforeHNY(new Date()));
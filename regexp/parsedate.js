

let regexp = /^(\d{2})-(\d{2})-(\d{4})$/
let date = '17-07-2023'

if (regexp.test(date)) {
    console.log("ok date");
}

let [_, day, month, year] = date.match(regexp); // or regexp.exec(date)

console.log(day);
console.log(month);
console.log(year);

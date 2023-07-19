let date = new Date()

console.log(date.toDateString()); // Mon Oct 15 2018

console.log(date); // 2018-10-15T17:00:00.000Z

console.log(date.getDay()); // 1
console.log(date.getDate());    // 15
// Belangrijk is date.getTime() want dan kun je die ophalen, er mee rekenen en terugzetten, voorbeeld:

let millis = date.getTime();

console.log(millis); // 1539619200000

millis += 8934754834

date.setTime(millis);
console.log(date);
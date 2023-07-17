let numberString = "42";

// Convert to a number in three manners

//1. Use the Number constructor
let number = Number(numberString);
console.log(number+1); // 43

//2. Use parseInt
number = parseInt(numberString);
console.log(number+2); // 43

//3. Use the unary plus operator
number = +numberString;
console.log(number+3); // 43

// OK
console.assert(number === 42, "The number should be 42")

// Fail
console.assert(number === 43, "The number should be 43")
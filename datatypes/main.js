let sentence = "This is a test";

let words = sentence.split(" ");

for (let word of words) {
    console.log(word);
}

console.assert("test" === words[3]);

let x = 1.4567
console.log(x.toFixed(2))
// prints 1.46

console.assert('1.46' === x.toFixed(2))



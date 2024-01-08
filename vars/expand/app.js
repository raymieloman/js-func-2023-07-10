const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true


let body = '{"person": { "name": "Raymond", "age": 18 }}'

// ff kijken of het zo beter werkt
let personRaymie = {
    name: "Raymond Loman",
    age: 55,
    dateOfBirth: {
        day: 9,
        month: 8,
        year: 1968
    }
}

let personString = JSON.stringify(personRaymie);
console.log(personString);
let personRaymieAgain = JSON.parse(personString)
console.assert(personRaymieAgain !== personRaymie)

{
    const {dateOfBirth} = personRaymie
    console.assert(dateOfBirth.day === 9);
    console.assert(dateOfBirth.month === 8);
    console.assert(dateOfBirth.year === 1968);
}


const {person} = JSON.parse(body);
console.log(person);

console.log("Raymond" === person.name)
console.log(person.name)
{
    const {dateOfBirth} = personRaymie
    console.log(dateOfBirth)
}


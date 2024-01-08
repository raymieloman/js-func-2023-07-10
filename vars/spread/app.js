function add(x, y, z) {
    return x+y+z;
}

let numbers = [3, 4, 5];

console.assert(add(...numbers) === 12);

numbers = [6, 7, 8, 9, 10, 11, 12, 13];

console.assert(add(...numbers) === 21); // so picks only first three

let  people = { id: 4 ,firstName: 'John'};
people = { ...people, lastName: 'Fogerty'}; // add some using the spread operator
console.assert(people.id === 4, "id is NOK");
console.assert(people.firstName === 'John');
console.assert(people.lastName === 'Fogerty');

console.assert()
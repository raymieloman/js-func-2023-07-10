let car = Object
let truck = {}
car = Object
car.licensePlate = "AABBCC";
car.color = "Red";
car.mileage = 42000;

console.table(car);

console.log(car)

for (let property in car) {
    console.log(`A car has the property: ${property} and the value is: ${car[property]}`);
    console.log(car['licensePlate']);
}

// so remember
/*
for(let ... in object/array) => renders the properties
for(let ... of object/array) => renders the values of the properties
 */

let fibon = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

for (let index in fibon) {
    console.log(`The ${index}e element of the fibon`)
}

for (let value of fibon) {
    console.log(`The value of the fibon range: ${value}`);
}


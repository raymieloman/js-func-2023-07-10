
let car = {
    mileage: 42000,
    licensePlate: "AABBCC",
    color: "Red"
}

console.log(car?.color.length);

console.log(car?.persons?.length)

let truck

truck = truck ?? car

console.table(truck);
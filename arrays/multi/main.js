let array = [[0, 1, 2], [3, 4, 5], [6, 7, 8, 9, 10]];

let row = 0;
for (let numbers of array) {
    let col= 0;
    for (let number of numbers) {
        console.log(`row: ${row},  col: ${col++} has value: ${number}`);
    }
    row++
}
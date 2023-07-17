

let counter = 0;
while (counter <= 15) {
    console.log(`The counter is: ${counter}`);
    counter++
}
console.log(`Finally!: The counter is: ${counter}`);

// for loop
for (let i = 0; i <= 15;i++) {
    if(i == 8) {
        break;
    }
    console.log(`The value of i is: ${i}`);
}

// forever als je true tussen de haakjes zet
while(false) {

}

let j = 10;
//forever
for(;;) {
    if(j == 15000) {
        break;
    }
    console.log(j);
    j++
}




// console.log(i) // vout

// continue: ga verder met de volgende

// break continue
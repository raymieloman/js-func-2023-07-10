function divide(a, b) {

    if (b === 0) {
        throw new Error('divide by zero');
    }

    return a / b;
}

function start() {
    console.log(divide(3, 4));
    try {
        console.log(divide(3, 0));
    } catch (error) {
        console.log("Delen door nul is flauwekul!")
    }
    console.log("einde programma");
}
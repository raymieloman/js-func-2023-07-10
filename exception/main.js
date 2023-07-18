function divide(a,b) {

    if (b === 0) {
        throw new Error('divide by zero');
    }

    return a/b;
}

console.log(divide(3,4));
try {
    console.log(divide(3, 0));
} catch (error) {
    console.log("Delen door nul is flauwekul!")
    throw error
}
console.log("einde programma");
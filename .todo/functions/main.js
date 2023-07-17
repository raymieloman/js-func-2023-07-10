function foo() {
    return 42;
}

function assertTrue(b, message) {
    if(!b){
        throw new Error(message);
    }
}

function assertEquals(a, b) {
    assertTrue(a === b, `Expected: ${a}, Actual: ${b}`);
}


function fac(n) {
    if (n === 0) {
        return 1
    }
    return n*fac(n-1)
}

function fibon(n) {
    if(n===0) return 0
    if(n===1) return 1
    return fibon(n-1)+fibon(n-2)
}


console.log(foo());
console.log(fac(3))
console.log(fibon(5))

assertEquals(5, fibon(5));
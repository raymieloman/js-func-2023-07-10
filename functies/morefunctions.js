function ggd(n, m) {
    if (n % m == 0) {
        return m;
    } else {
        return ggd(m, n % m);
    }
}

function fibon(n) {
    return n == 0 || n == 1 ? n : fibon(n - 1) + fibon(n - 2)

}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


// main
console.log(ggd(6, 3)); // 3
console.log(ggd(27, 18)); // 9

console.log(fibon(5));
console.log(fibon(10));
for (let i = 0; i < 20; i++) {
    console.log(`${fibon(i)} isPrime? => ${isPrime(fibon(i))}`);
}




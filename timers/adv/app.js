// rloman hier verder met timers

// syntax:
/*
setTimeout(function, ms)
 */

function printRandom() {
    console.log(Math.random());
    setTimeout(printRandom, 500)
}

setTimeout(printRandom, 1000);


setTimeout(() => {
    console.log("Here I am")
}, 2000)

// interval
let timeleft = 10
let pid
function startTheClock() {
    pid = setInterval(countDown, 1000);
}

function countDown() {
    if (timeleft > 0) {
        console.log(`Time is: ${timeleft}`);
        timeleft--;
    } else {
        console.log(`Stopping timer`);
        clearInterval(pid);
    }
}

startTheClock();
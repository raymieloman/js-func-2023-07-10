let timeleft = 10, countid

function start() {
    countid = setInterval(countDown, 1000)
}

function countDown() {
    if (timeleft > 0) {
        timeleft--
    } else {
        clearInterval(countid)
        console.log("Einde programma");
    }
    let t1 = document.getElementById('timeleft')
    t1.textContent = timeleft
}
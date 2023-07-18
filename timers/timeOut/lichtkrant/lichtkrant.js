let pid = -1;

function light() {
    let paper = document.getElementById("paper");
    let str = paper.textContent;
    str = str.substr(str.indexOf()) + str.substr(0, 1);
    paper.textContent = str;
    pid = window.setTimeout(light, 175);
}


function stopTimer() {
    if(pid != -1) {
        window.clearTimeout(pid);
        pid = -1;
    }
}
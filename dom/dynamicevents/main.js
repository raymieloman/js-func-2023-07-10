
function enableListeners() {
    let divs = document.getElementsByTagName("div");
    for(let div of divs) {
        div.addEventListener("click", function(e) {
            alert("You clicked on div " + div.id);
            alert("Using the event: You clicked: "+ e.target.id)
        });
    }

    let spans = document.getElementsByTagName("span");
    for(let span of spans) {
        span.addEventListener("click", showEvent);
    }
}

function showEvent(event) {
    event.target.style.color="forestgreen";
}


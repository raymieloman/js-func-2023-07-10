function showMessage() {
    console.error("Hallo daar!")
    setTimeout(showMessage, 2000)
}

setTimeout(showMessage, 2000)
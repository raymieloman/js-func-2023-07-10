function validateForm() {

    let message = "";

    if(!document.personalia.firstName.value) {
        message += "Should have firstname";
    }
    if (!document.personalia.lastName.value) {
        message += "\nShould have lastName";
    }
    // end of validation
    if (message != "") {
        alert("Some errors were found:\n"+message);

        return false;
    }
    return true;
}
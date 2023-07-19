function save() {

    let firstName = document.personalia.firstname.value;
    let lastName = document.personalia.lastname.value;
    let age = document.personalia.age.value;

    console.log(`Saving person with values => lastName: ${lastName}, firstName: ${firstName}, age: ${age}`);

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    for (let key in person) {
        console.log(key);
        console.log(person[key]);
    }
}
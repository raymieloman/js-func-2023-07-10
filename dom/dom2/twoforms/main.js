function save() {

    let firstName = document.forms[0].firstname.value;
    let lastName = document.forms[0].lastname.value;
    let age = document.forms[0].age.value;

    console.log(`MULTIPLE FORMS: Saving person with values => lastName: ${lastName}, firstName: ${firstName}, age: ${age}`);

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    for (let key in person) {
        console.log(key);
        console.log(person[key]);
    }

    let licensePlate = document.forms[1].licensePlate.value;
    let type = document.forms[1].type.value;
    let color = document.forms[1].color.value;

    let car = {
        licensePlate: licensePlate,
        type: type,
        color: color
    }
    for( let key in car){
        console.log(key);
        console.log(car[key]);
    }

    console.log("Iterate over the forms")

    let forms = document.forms;

    for(let form of forms){
        for(let key in form){
            console.log(key);
            console.log(form[key]);
        }
    }
}
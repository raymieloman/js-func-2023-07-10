function printMe(person) {


    for (let property in person) {
        console.log(`Person has property: ${property}`)
        console.log(`Person has property: ${property} and the value is: ${person[property]}`)
    }
    console.log(`Person lastName is: ${person.lastName}`)
    // via de associatieve array
    console.log(person["firstName"])


    // ?.
    console.log(person.partner)
    console.log(person?.partner?.length)


    // ??
    person.partner = person.partner ?? "Nieuwe partner"
    console.log(person.partner)
}

let person = new Object
person.firstName = 'John'
person.lastName = 'Smith'
person.dateOfBirth= '1968-08-09'
person.hobbies = ["Hardlopen", "Lezen", "Programming"]
// person.partner="Suzanne"
printMe(person)

let person2 = {
    firstName: "Raymond",
    lastName: 'Loman',
    hobbies: ['Running', 'Reading', 'Randomizing with friends :-)'],
    partner: {
        firstName: 'Francien',
        lastName: 'Loman - Strijkers'
    }
}
printMe(person2)




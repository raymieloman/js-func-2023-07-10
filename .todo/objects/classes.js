class User {

    passwordItIs = "1234";

    constructor(name, age) {
        const counter = 0;
        console.log(this.passwordItIs);
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if (value < 0) {

        }
    }
}

let user = new User("John", 25);

console.log(user);


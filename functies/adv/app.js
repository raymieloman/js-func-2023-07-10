function regular(a,b) {
    return a+b;
}

let age = 1;

var b = function(n,m) {
    return n+m+age; // age is reachable here
}

console.assert(b(4, 2) == 7);

var c = (n,m) => {
    return n+m+age;
}

console.assert(c(4,2) == 7)

class Car {
    mileage = 42;

    autoBoundMethod = ()=> {
        console.log(this.mileage);
    }

    notAutoBoundMethod() {
        console.log(this.mileage);
    }
}

const car = new Car();
car.autoBoundMethod();
car.notAutoBoundMethod();

const { autoBoundMethod} = car;
autoBoundMethod()

const { notAutoBoundMethod}  = car;
// fails since the this scope is now changed! (fails: runtime error)
notAutoBoundMethod();




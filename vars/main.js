let age = 15;

document.write(age);
document.write("<br>")

age = age + 1;
document.write(age);

age++;
document.write("<br>");
document.write(age);
document.write("\n");
document.write(age);

const firstName = "Saskia";

document.write(firstName);
// firstName = "Loes"; // vout
document.write(firstName);

{
    let a = 5;
    console.log(a);
    b = 45;
    var c = 45;
}

// console.log(a)  want a is not defined
console.log(b);
console.log(c);

let animal = 15;
console.log(typeof(animal));
animal = "Poedel";
console.log(typeof(animal));

let rest = 523 %  60;
console.log("rest na deling is: "+rest)

let macht = 2 ** 3
console.log("2 tot de macht 3 is: "+macht)

let machtAsString = ""+macht

lastName = "de Vries"

let messageOnhandig = "Welkom "+ firstName+ " " + lastName+ " op onze website"
console.log(messageOnhandig)

let messageHandig = `Welkom ${firstName} ${lastName} en uw leeftijd ${age+1} op onze website`
console.log(messageHandig)


let person = {
    name: "Frans"
}

let length = person.name.length.toExponential











let password = "";
do {
    password = window.prompt("Enter your password");
} while(password != "secret")
alert("Password accepted");


let month = 7

let aantalDagenInDezeMaand = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        aantalDagenInDezeMaand = 31;
        break;
    case 2:
        aantalDagenInDezeMaand = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        aantalDagenInDezeMaand = 30;
        break;
    default:
        throw new Error();
}
const btw = 21;
// btw++;// fails

let age = 45;
age++;

function demo() {
    let name = "Raymond";
    {
        let lastName = "Loman";
        var age = 45;
    }
    // lastName is out of scope
    // age is still in scope which is strange / tricky / dangerous / funny
    console.log(lastName) // runtime error (I would have/expect a compile error)
    console.log(age);
}

demo();
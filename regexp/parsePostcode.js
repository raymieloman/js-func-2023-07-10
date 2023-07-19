let postcode="7603 EC10B";

let regexp = /^[1-9]\d{3}\s{0,2}[A-Z]{2}\s*\d+[A-Za-z]?$/

if (regexp.test(postcode)) {
    console.log("ok postcode");
    // parse it (and use groups for that)
    regexp = /^([1-9]\d{3})\s{0,2}([A-Z]{2})\s*(\d+)([A-Za-z]?)$/
    let [_, numbers, letters, houseNumber, houseNumberAddition] = postcode.match(regexp);
    console.log(`Numbers: ${numbers}, letters: ${letters}, houseNumber: ${houseNumber}, houseNumberAddition: ${houseNumberAddition}`);
} else {
    console.log("no postcode");
}
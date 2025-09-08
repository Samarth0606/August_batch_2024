// let x = "sam"
// let x = 'sam'
// let x = `sam`
// console.log( typeof(x) )

// --------------------------------------

// camelCase
let firstName = "Sam"
let lastName  = "Vohra"
let job = "WEB MENTOR"
let company = "INTERNSHALA"

// Hey there, I am Sam Vohra, a WEB MENTOR at INTERNSHALA
// Concatenation (+)


// not a good way
// let output = "Hey there, I am" + " " + firstName + " "  + lastName + " " + ", a" + " "  + job + " " + "at" + " " + company 
// console.log(output);

// ---------------------------------------------------

// better/best way 
// STRING TEMPLATE LITERALS 
let output = `Hey there, I am ${firstName} ${lastName} , a ${job} at ${company}` 
console.log(output);




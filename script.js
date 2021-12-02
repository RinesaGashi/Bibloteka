let username = "Rinesa"; // string
let birth_year = 2003; // number
let iskid = false; // boolean
let isadult = true; // boolean
let height = 1.62; // number
let temperature = -20; // number
let quotes = "Life is awesome"; // string

let user_email; //undefined
let score = null; // null

//Funksion i gatshem i JS

console.log("Hello world!My first JavaScript code");
console.log(quotes)
console.log("quotes")

quotes = 'Life is beautiful'; String
console.log(quotes);

alert("Hello world");
alert(quotes);

//alert("Hello world");
//alert(quotes);

let user_name = prompt("Sheno emrin tuaj");
let user_surname = prompt("Sheno mbiemrin");
let user_age = prompt("Sheno moshen tuaj");
console.log('Your full name is', user_name, user_surname, 'You are', user_age, ' years old');

let mosha = 16;
if(mosha < 18) {
    console.log ("Sorry you are not old enough to enter");
} else if (mosha <21) {
    console.log("Welcome. You can enter");
}
if (6 < 3) {
    console.log("Hi"); 
} else {
    console.log("Hi again");
}
let friends = ["Nita", "Besmir", "Jackie"]; //arroys
// index         0        1          2
let exam_points = [78, 44, 23, 98];
// index            0   1   2   3
console.log(friends);
console.log(friends[0]);

console.log(exam_points[3]);

//objektet
let boolean = {
    name: "Veronica vendos te jetoj",
    author: "Ismail Kadare",
    year_published: 1989,
    genre: 'Romance',
    description: 'A book about peace',
    price: 12.45,
};
console.log(boolean);
console.log(boolean.description);
console.log(boolean.author);

//funksionet

function Welcome(user) {
    alert("Hello", user);
}
Welcome('nita');
Welcome('jackie');

function getSum(a, b, c) {
    let result = a + b + c
    
}



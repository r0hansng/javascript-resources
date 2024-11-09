//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// const bigNumber = 311231231231231241241321n // bigint k liye last me number k n  laga dena h 

//Refernce Type (Non-Primitve)

//Arrays, Objects, Functions

const heroes = ['shaktimaan', 'naagraj', 'doga']

let myObj = {
    name: "rohan",
    age : 18,
}

const myFunction = function(){
    console.log(`Hello World`);
}

console.log(typeof outsideTemp); //output null aega


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) - copy milti h , Heap (Non-Primitive) - reference milta h (original value m chanhge hota h)

let myYoutubeName = "rohansinghdotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohan@google.com"

console.log(userOne.email);
console.log(userTwo.email);
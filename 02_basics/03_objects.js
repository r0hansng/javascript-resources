//There are two ways to define an object (1. Literal) (2. Constructor)

// singleton :  Jb constructor se object banate h tb uske trh ka ek hi object hota h 
//Object.create

//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Rohan",
    "fullName": "Rohan Singh",
    [mySym]: "myKey1", //Important for interview purposes.
    age: "18",
    location: "Delhi",
    email: "Rohan@google.com",
    isLoggedIn: false,
    lastLogInDay: ["Monday", "Saturday"]
}

//Ways of accessing an object

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["fullName"]); // => This is the only way here to access the elements
// console.log(jsUser[mySym]); // => This is the only way here to access the elements

jsUser.email = "rohan@chatgpt.com"
// Object.freeze(jsUser) // => Iske baad object koi change nhi kr skta h 
jsUser.email = "rohan@micrsoft.com"
// console.log(jsUser);


//Adding a function as an instance of the object
jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`); //This keyword keval usi object k andar elements ko access krne k liye use krte h 
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
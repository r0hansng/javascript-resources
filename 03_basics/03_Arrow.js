const user = {
    username: "rohan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //Here we have to use 'this' keyword for using the username in the current context        
        console.log(this);
        
    }
}
//The 'this' keyword is used to access the value in the current context
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rohan"
//     console.log(this); //Very long output 
//     console.log(this.username); //Output is undefined
// }

// const chai = function(){
//     let username = "rohan"
//     console.log(this); //Same outputs
//     console.log(this.username); 
// }

//Arrow Function
const chai = () => {
    let username = "rohan"
    console.log(this);
    console.log(this.username); 
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return
// const addTwo = (num1, num2) => num1 + num2 


//When we use {} we HAVE to use return keyword but when we use parenthesis we don't use return keyword.
// const addTwo = (num1, num2) => (num1, num2)

const addTwo = (num1, num2) => ({username: "Rohan"})

console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()
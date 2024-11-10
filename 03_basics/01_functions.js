function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3, 5) // Here, 3 and 4 are arguments.
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){ //Sam is the default value: Used when no arguement is given into function.
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); //Output : [500, 2000]

const user = {
    username: "Rohan",
    price: 199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 399
// })

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

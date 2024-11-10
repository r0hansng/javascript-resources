// var c  = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i]
// }

// console.log(a);
// console.log(b);
// console.log(c);


//The variable website can't be accesed outside the two() function
function one(){
    const username = "Rohan"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website); 

    two()
}

// one()

if (true){
    const username = "Rohan"
    if (username === "Rohan"){
        const website = " youtube"
        // console.log(username + website);
    }
}

// ++++++++++++++++++++++++Interesting++++++++++++++++++++++++

console.log(addOne(5));


function addOne(num){
    return num + 1
}

console.log(addTwo(5)); // This will not execute because this is an expression and the function cannot be accessed. (Concept of Hoisting)


//Expression
const addTwo = function(num){
    return num + 2
}
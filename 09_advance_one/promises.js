//Promise means the task is added in the queue but not loaded
//Promises are mostly consumed and created very rarely 
//Promise is an object requesting an eventual completion 

// Creating a new promise
const promiseOne = new Promise((resolve, reject) => {
    //Do an async task: DB calls, cryptography, network
    setTimeout(() => {
        resolve(); //Resolve is used to tell that the task is complete
        console.log("Async Task is complete ");
    }, 1000);
})


//The value here is returned 
promiseOne.then(() => {
    console.log("Promise consumed");
}) //resolve ka connect h .then() se

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
    
}) 


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000)
})

//Getting the data from the promise
//during the consumption of the promise, we get the data from the resolve parameters. 
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Chai", password: "123"});
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})

//.catch is used to catch the error
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => { //.then is used to get the data from the previous .then
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected"); //.finally is always executed regardless of the promise is resolved or rejected
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"});
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000)
})

//Using async-await
//async: waits for the work to be done and then only it will move to the next line
//await: waits for the promise to be resolved or rejected

async function consumePromiseFive(){
    try {
        const response = await promiseFive //Promise is an object and is not consumed using ()
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    }
} 

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = fetch('https://jsonplaceholder.typicode.com/users') //Fetch is an object and returns a promise
//         const data = await response.json() //The Data is coming in the form of string and is converted to json
//         console.log(data);
//     }
//     catch (error){
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then(data => console.log(data))
.catch((error) => console.log(error))


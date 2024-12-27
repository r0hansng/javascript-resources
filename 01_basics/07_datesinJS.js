let myDate = new Date()
// console.log(myDate.toString()); // output: Fri Nov 08 2024 10:12:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //ouput :Fri Nov 08 2024
// console.log(myDate.toLocaleString());//output :11/8/2024, 10:12:58 AM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24)// We can pass arguments in the date obejct to get a specific time
// let myCreatedDate = new Date(2024, 0, 24, 5, 3) 
// let myCreatedDate = new Date("2024-01-01") 
let myCreatedDate = new Date("01-14-2024") //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //For getting the exact time stamp Use case: when we are creating polls and such stuff
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//Get time in millisecond

//Converting in seconds 
// console.log(Math.round(Date.now()/1000));//Always use millisecond for comparison 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate}` // - String interpolation


// ++++++++++++++++Very Important++++++++++++++++++++++

newDate.toLocaleString('default', {
    weekday: "long",
})

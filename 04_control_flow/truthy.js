//Truthy: A value which is always true
//Flasy : A value which is always false

const userEmail = []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//flasy

// false, 0, -0, BigInt, "", NaN, null, undefined


//Proper way to check array is empty
if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

//Proper way to check object is empty
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalecsing Operator (??): null undefined
// Agar koi value aa rhi hoti h kisi database se to wo assign kr deta h wrna null hi assigned rehta h and if do values di h to first vali de deta h

let val1;
// val1 = 5 ?? 10
// val = null ?? 10
val1 = undefined ?? 15

console.log(val1);


//Ternary Operator 

// condition ? true : false

const iceTeaPrice = 100 

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


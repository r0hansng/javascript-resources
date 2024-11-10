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
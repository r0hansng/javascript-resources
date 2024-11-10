//Immeadiately invoked functional expression

function chai() {
    console.log("DB CONNECTED");
}

//We use IIFE to avoid the pollution from global scope.
(function chai() {
    //Named IIFE
    console.log("DB CONNECTED");
})(); //To prevent an ERROR from occuring during another IIFE we HAVE to use ';'

((name) => {
    //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`); 
})('rohan')
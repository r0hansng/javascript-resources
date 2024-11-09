let score = "Rohan"

console.log(typeof score);
console.log(typeof(score)); //can also be used as a method

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN - Type number hi h 
// true = 1; false = 0

let isLoggedIn = "rohan"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(someNumber);


// ********************* Operations ********************* 

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " rohan"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//If string pehle h to baaki sara string ki trh treat krte h and if string last m h to pehele vaalo ko add krke fir string concatinate krte h 

console.log(+true); //gives 1
console.log(+""); //gives 0

let gameCounter = 100
gameCounter++ //postfix m if kisi variable ko assign kr rhe h to pehle assign ho jata h fir value increase hoti jbki post-fix m increase krke assign krte h 
console.log(gameCounter);


//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Batman", "Spiderman", "Iron-man", "Captain America"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array Methods

myArr.push(6) //Add values to the array
myArr.push(7)
myArr.pop() //Remove values from an array

myArr.unshift(9) //Adds the value to the start of the array 
myArr.shift() //This particular method remvove the element from the start

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() //Array Group krke string m convert kr deta h

console.log(myArr);
console.log(newArr);

// ----------------------Slics, Splice---------------------------(Interview)

/* =======Difference bewtween splice and slice=============
Slice: Nothing happens to the original Array
Splice: This function removes the specified range of the array indices (inclusive)
*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C", myArr); 

/* ===============Output====================
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]
C [ 0, 4, 5 ] 
*/
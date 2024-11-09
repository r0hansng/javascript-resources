const name = "rohan"
const repoCount = 50

// console.log(name + repoCount + " Value"); //This syntax is outdated not used in modern times

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rohan-rs-com") //Another way of decalring a string which is treated as an obejct
console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase()); //here the original value is not changed because string is a primitive datatype and is stored in stack
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)//slice m negative value  b daal skte h 
console.log(anotherString)

const newStringOne = "    rohan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohan.com/rohan%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
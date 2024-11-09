const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //Kitne decimal places tk answer chahiye

const otherNumber = 123.8862

console.log(otherNumber.toPrecision(4));//Round ki trh h but jitni place tk define kiya utne tk hi round off krega

const hundreds = 1000000
console.log(hundreds.toLocaleString());//Commas laga kr value deta h is example 1,000,000

// ++++++++++++++++++++++++++++++= MATH ++++++++++++++++++++++++++++++++++++++++++÷

console.log(Math)
console.log(Math.abs(-4))

console.log(Math.random());
console.log(Math.random()*10 + 1); //+1 isliye kiya kyuki random m 0 bhii included hota h and us case ko avoid krna ho to ye
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Jb kisi 20 specific range k andar values chahiye hoti h  

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//The reason is that equality == and comparisons >< >= <= work differently 
//Comparison convert null into number but equality doesn't 
//That's why in (3) the value is true and in (1) it's false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//=== also compares the datatypes
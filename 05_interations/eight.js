// reduce method

const myNums = [1, 2, 3]

//Here 0 is the current value used only for the first time by the accumalator variable.
// const myTotal = myNums.reduce( function(accumalator, currentValue) {
//     console.log(`acc: ${accumalator}, currVal: ${currentValue}`);
//     return accumalator + currentValue
// }, 0) 

// console.log(myTotal);

const myTotal = myNums.reduce( (accumalator, currentValue) => accumalator + currentValue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "jscourse",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

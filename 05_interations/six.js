// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values); //Output: Undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Same thing happens in forEach() but forEach() doesn't return a value.
myNums.filter( (num) => num > 4)//Filter also takes callback

//Whenever we open a scope i.e, {} we HAVE TO USE 'return' keyword.
// const newNums = myNums.filter((num) => {
//     return num > 4
// }) 

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: "Book One", genre: "Fiction", publish: 2011, edition: 2024},
    {title: "Book Two", genre: "Non-Fiction", publish: 2001, edition: 2024},
    {title: "Book Three", genre: "History", publish: 1982, edition: 2024},
    {title: "Book Four", genre: "Science", publish: 1984, edition: 2024},
    {title: "Book Five", genre: "Non-Fiction", publish: 2002, edition: 2024},
    {title: "Book Six", genre: "Science", publish: 2006, edition: 2024},
    {title: "Book Seven", genre: "History", publish: 1981, edition: 2024},
    {title: "Book Eight", genre: "Fiction", publish: 1980, edition: 2024},
    {title: "Book Nine", genre: "History", publish: 1964, edition: 2024},
]

let userBooks = books.filter( (book) => book.genre == "History")

userBooks = books.filter( (book) => {
    return book.publish >= 1995 && book.genre == "Science"
})

console.log(userBooks);

const marvelHeroes = ["Thor", "Iron-Man", "Spider-man"]
const dcHeroes = ["Batman", "Flash", "Superman"]

marvelHeroes.push(dcHeroes)

console.log(marvelHeroes); //Output: [ 'Thor', 'Iron-Man', 'Spider-man', [ 'Batman', 'Flash', 'Superman' ]-> Single Element ]
//Pure k pure array ko utha kr hi dal deta h 
console.log((marvelHeroes[3][1]));
marvelHeroes.concat(dcHeroes)

console.log(marvelHeroes);

const allNewHeoroes = [...marvelHeroes, ...dcHeroes]

console.log(allNewHeoroes); //(...) spread operator, unpacks the elements
 
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usableAnotherArray = anotherArray.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(usableAnotherArray);



console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));
console.log(Array.from({"rohan"})); //Output: [] ++(Interesting for interview)++

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
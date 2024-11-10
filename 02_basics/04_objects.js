//singleton

// const tinderUser = new  Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"someuser@example.com",
    fullName: {
        userFullName: {
            firstName: "Rohan",
            lastName: "Singh"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) //=> {} acts as target here and rest as a source meaning all the values from source objects in going inside the target object which is an empty object

const obj3 = {...obj1, ...obj2} //This is used often 
console.log(obj3);


//Database Data comes in the form of array of objects
const users = [
    {
        id: "1",
        email: "r@gmail.com"
    },
    {
        id: "1",
        email: "r@gmail.com"
    },
    {
        id: "1",
        email: "r@gmail.com"
    }
]

users[1].email
console.log(Object.keys(tinderUser)); //Datatype is an array
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser)) //Output : [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedin', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//Good practice: Destructuring (Syntax Chota krne k liye use krt eh bs ar kch nhi)

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// +++++++++++++++++++++++++    Used in React    +++++++++++++++++++++++++
/* const navbar = ({compnay}) => {}
navbar(compnay = "Nvidia") */
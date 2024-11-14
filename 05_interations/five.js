const coding = ["js", "rb", "py", "cpp", "swift"]

// forEach function takes only callbacks as arguments i.e functions without names
coding.forEach(function (val){
    // console.log(val); 
})
coding.forEach((val) => {
    // console.log(val);    
})

function printMe(val){
    // console.log(val);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "JS"
    },
    {
        languageName: "javascript",
        languageFileName: "JS"
    },
    {
        languageName: "javascript",
        languageFileName: "JS"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

//for in
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);\
}

const programming = ['js', 'cpp', 'rb', 'swift', 'py']

//By default arrays and objects ki keys 0, 1, 2...... hoti h 
for (const key in programming){
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')


//We can't write loops on map like this
// for (const key in map){
//     console.log(key);
// }


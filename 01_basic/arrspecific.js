// for of
// ["","",""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);    
// }

// const greetings ="Hello World"

// for (const greet of greetings) {
//     console.log(`Each Char is ${greet}`);
    
// }

//Map................,,,,,,,,,,,,,,,,,,

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State Of America")
map.set("Fr", "Franch")

// console.log(map);

// for (const key of map) {
//     console.log(key);    
// }
// output pura ka pura arry print ho gya hme agr value or key alag alag chahiye to arr ko distructure krna pdega

// [ 'IN', 'India' ]
// [ 'USA', 'United State Of America' ]
// [ 'Fr', 'Franch' ]


// this is the syntax to distructure arry
for (const [key, value] of map) {
    console.log(key, ":-", value);    
}
// Output
// IN :- India
// USA :- United State Of America
// Fr :- Franch


const myObject = {
    "Game1" : "NFS",
    "Game2" : "Cricket"
}

for (const [key, value] of myObject) {
    // console.log(key, ":-", value);  
    
}
// TypeError: myObject is not iterable
function sayMyName(){
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
}

// sayMyName()

//add two numbers

// function addTwoNumber(number1, number2){ // parametors
//     console.log(number1 + number2);

// }

// addTwoNumber(3,4) // Argumennts
// const result = addTwoNumber(3,5) 
// console.log(result)

function addTwoNumber(number1, number2){ // parametors
    // let result = number1 + number2
    // return result
    return number1 + number2

}

// addTwoNumber(3,4) // Argumennts
const result = addTwoNumber(3,5) 
// console.log("result:", result);


function loginUserMessage(username = "SAM"){  //BE DEFAULT VALUE 
    // if(username === undefined){
    //     console.log("Please Enter a value");
    //     return
    // }
    if(!username){
        console.log("Please Enter a value");
        return
    }
    return `${username} Just Logged in`
}

// console.log(loginUserMessage("Sidhu"));
// console.log(loginUserMessage()); // return undefined if not pass any value

// ! convert true to false and vice versa
// ... is rest or spread operator its name is decided on its use case

// function calculateCartPrice(...num1){
//     return num1
                            
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));
// OUTPUT [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
                            
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
// OUTPUT [ 500, 2000 ]


// const users = {
//     username: "sidhu",
//     price: "199"
// }

// function objectHandle(anyobject){
//     console.log(`${anyobject.username} is username & ${anyobject.price} is the price`);
// }

// objectHandle(users);
// OUTPUT sidhu is username & 199 is the price

// const users = {
//     username: "sidhu",
//     prices: "199"
// }

// function objectHandle(anyobject){
//     console.log(`${anyobject.username} is username & ${anyobject.price} is the price`);
// }

// objectHandle(users);
// OUTPUT sidhu is username & undefined is the price  gets undefinded thats why we use typescript to check such things that these are present in object or not

function objectHandle(anyobject){
    console.log(`${anyobject.username} is username & ${anyobject.price} is the price`);
}

objectHandle({
        username: "sidhu",
        price: "199"
});

const myNewArry = [200, 400, 100, 600]

function returnSecondValue(getArry){
    return getArry[0]
}

// console.log(returnSecondValue(myNewArry));
// console.log(returnSecondValue([1000, 200, 500]));


//,,,,,,,,,,,,,,..........scope ..........................,,,,,,,,,,,,,

// Block Scope & Global SCOPE

let a = 10
// const b = 20
var c = 300

// block scope
if(true){
    let a = 100
    const b = 20
    var c = 30
    console.log(a);
}

// console.log(a);
// console.log(b);
console.log(c); // thats why we do not use var because OUTPUT 30 EVEN Value in block scope


// when we check the global scope in browser inspect than it is different then the node scope

// {} this is scope 



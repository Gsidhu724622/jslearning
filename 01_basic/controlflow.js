//if 

// if(condition){

// }

//if condition is true than the scope code will execute and vice versa

const isUserLoggedIn = true
if(isUserLoggedIn){

}

//Operator condition
// <, >, <=, >=, ==, !=, ===, !== triple equal check datatype also

// let score = 200
// if (score<100){
//     let power = "fly"
//     console.log(`You Have Power ${power}`);
// }else{
//     console.log(`You Dont Have Power TO FLY`);
// }

const balance = 1000
// if (balance>500){
//     console.log("Executed");
// }
// if(balance>500) console.log("executed");

// we can execute without curly bracket but for that we have to write in one line above. scope is understoodable. also we can write multiple line by using , comma not good practice but we can write

// if (balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const isUsersLoggedIn = true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if(isUsersLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


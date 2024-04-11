const user = {
    username : "sidhu",
    price: 999,

    welcomMsg : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this refere the context 
    }
}

// user.welcomMsg()
// user.username = "Sam"
// user.welcomMsg()
// console.log(this);

// browser ke ander jo global object h wo window h isi liye hm dom ke event use kr skte h nut jab hum this ko node me run krte h to hme empty object mitlta h important for interview

// const chai = () => {
//     let username = "sidhu"
//     console.log(this);

// }
// chai()

// const chai = function() {
//     let username = "sidhu"
//     console.log(this);

// }
// chai()

// implicit return  remove curly bases  and remove return hum parathinsis me add kr be skte h or nhi be

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username : "sidhu"})
// console.log(addTwo(3,4));


//,,,,,,,,,,,,,,, Immediately Invoked Function Expressions (IIFE),,,,,,,,,,,,,,,,//
// Interview Jo funtion immediately execute ho jaye iska hm use krte h global scope ke pollution se problem hoti h kayi baat uske jo be varibles or decleartion h us se bchne ke liye hm IIFE use krte hai

// (function chai(){
//     console.log("DB CONNECTED");
// })();

// ( ()=> {
//     console.log("DB CONNECTED");
// } )()
( (name)=> {
    console.log(`DB CONNECTED ${name}`);
} )("sidhu")
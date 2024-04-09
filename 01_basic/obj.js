// singleton
//object.create constructor se singleton bnta h

// object literals

let mySym = Symbol("key1")
const myObj = {
    name: "sidhu",
    // mySym: "symkey",
    [mySym]: "symkey",
    age: 18,
    email: "sidhu@google.com",
    location: "chandigarh",
    officeAttend: ["Monday","Tuesday","Saturday"]

}

// console.log(Object.keys(myObj));
// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myObj[mySym]);   interview type question
// console.log(typeof myObj[mySym]);
// myObj.email = "sidhu@chatgpt.com"
// Object.freeze(myObj)
// myObj.email = "sidhu@microsoft.com"
// console.log(myObj);

// myObj.greeting = function(){
//     console.log("How Are You");
// }
// myObj.greetingTwo = function(){
//     console.log(`${this.name  + " How are you"}`);
// }

// console.log(myObj.greeting);
// console.log(myObj.greeting());
// console.log(myObj.greetingTwo());


//................Singleton.......................//

const newObj = [
    {
        id: 1,
        fullname: {
            firstname: "guru",
            lastname: "sidhu"
        }
    },
    {
        id: 2
    },
    {
        id: 3
    },

]

// console.log(newObj);
// console.log(newObj[0].fullname.firstname);

const arrN = [
    {
        id: 5
    },
    {
        id: 6
    }
]

const finArr = [...newObj, ...arrN]

// console.log(finArr);
// console.log(finArr.push(8));
// console.log(Object.keys(newObj));

// console.log(myObj.hasOwnProperty('name')); return true false

const course = {
    courname: "Js Mastry",
    price: "999",
    courseInstructor: "Sidhu"
}

// course.courseInstructor

// const {courseInstructor} = course   syntax of destructing of object 
const {courseInstructor: instructor} = course  // destructing of object and assiging some short name

// console.log(courseInstructor);
console.log(instructor);

//in api values comes in json

// {
//   name: "sidhu",
//   coursename: "JS"
// }
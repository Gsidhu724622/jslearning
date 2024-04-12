//for in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js : "Javascript",
    cpp : "c++",
    rb : "ruby",
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);    
// }



// for in me array ki keys print hoti h by default arry ki jo keys h wo number h zero se start hoti h isiliyye object bnaye h ki hm aapni mazi ki key add kr skte h
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}

// for in se map pe iteration nhi ho skta


// Foreach Loop.......................MOST USED IN ARRY
const coding = ["js", "rb", "py", "java", "cpp","c"]
// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach((item)=>{
//     console.log(item);
// })

// hum direction function ko be call kra skte h refrence dena h print khud ho jayega

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// for each ke pass item index or arry teno chez aati h

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })
const myCode = [
    {
        langName: "Javascript",
        langFileName: "js"

    },
    {
        langName: "Java",
        langFileName: "java"

    },
    {
        langName: "Python",
        langFileName: "py"

    },
]

myCode.forEach((item)=>{
    console.log(item.langName);
})
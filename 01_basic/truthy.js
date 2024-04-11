// const userEmail = "sidhu@ai.com"
const userEmail = []
// const userEmail = ""

if(userEmail){
    console.log("user have email");
}else{
    console.log("User Dont Have Email");
}

// it mean that we default soch lia h ki agr sting ke ander koi value h it mean true h or code execute kr dia agr empty sting hoti to else will execute

//Falsy Values
//false, 0, -0, BigInt(0n), "", null, undefined, NaN

//Other All Truthy value
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//note
// false == 0  Output true
// false == ""  Output true
// 0 == "" Output true

// Nullish Coalescing Operator(??): null undefined

// it mean that jab hum database se interact kr rhe h koi value ke liye to wha pe hmare pass snerio h ki agr db se value aa rhi h to wo assign ho jayehgi other wise null ke according code execute kr lenge

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15 //(this value is get from the function getting from db)

console.log(val1);


// Terniary operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More than 80");
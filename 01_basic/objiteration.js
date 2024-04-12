//for in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// const myObject = {
//     js : "Javascript",
//     cpp : "c++",
//     rb : "ruby",
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);    
// }



// for in me array ki keys print hoti h by default arry ki jo keys h wo number h zero se start hoti h isiliyye object bnaye h ki hm aapni mazi ki key add kr skte h
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
// }

// for in se map pe iteration nhi ho skta


// Foreach Loop.......................MOST USED IN ARRY
// const coding = ["js", "rb", "py", "java", "cpp","c"]
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
// const myCode = [
//     {
//         langName: "Javascript",
//         langFileName: "js"

//     },
//     {
//         langName: "Java",
//         langFileName: "java"

//     },
//     {
//         langName: "Python",
//         langFileName: "py"

//     },
// ]

// myCode.forEach((item)=>{
//     console.log(item.langName);
// })

// const value = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(value);

// variable me jab hm value ko store krte h to undefined aayegi

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter((num)=> num>4)
// const newNums = myNum.filter((num)=> {
//     return num>4
// })
// console.log(newNums);

// implicit return  agr hm scope open krte h curly braket ke sath to return likhna pdega other wise paratheses ke sath single line me likhte h to koi need nhi h

// const newNum = []
// myNum.forEach((num)=>{
//     if (num>4) {
//         newNum.push(num)        
//     }
// })
// console.log(newNum);

const productMarksList =
    [     

        
        {
            
            "scale": 0.3,
            "name": "light",
            "labelNo" : "58160",
            "vr" : false,
            "labelName" : "Philips Gamma Outdoor Light",
            "details" : {name:"Philips Gamma Outdoor Light",color:"Anthracite",
                        material:"Aluminium",
                        dimention:"119x80x38",
                        lampBase: "LED Integrated",wattage:"4W",lumen_CCT : "250lm/3000K",price:"₹3,750/-"},
        },

        {
            
            "scale": 0.3,
            "name": "light",
            "labelNo" : "58160",
            "vr" : false,
            "labelName" : "Philips Gamma Outdoor Light",
            "details" : {name:"Philips Gamma Outdoor Light",color:"Anthracite",
                        material:"Aluminium",
                        dimention:"168x80x41",
                        lampBase: "LED Integrated",wattage:"7W",lumen_CCT : "382lm/3000K",price:"₹4,550/-"},
        },

        {
           
            "scale": 0.3,
            "name": "light",
            "labelNo" : "31450",
            "vr" : false,
            "labelName" : "Philips Propulsio Outdoor Light",
            "details" : {name:"Philips Propulsio Outdoor Light",color:"Anthracite",
                        material:"Aluminium",
                        dimention:"159x99x66",
                        lampBase: "LED Integrated",wattage:"10W",lumen_CCT : "670lm/3000K",price:"₹3,750/-"},
        },
        {
            "scale": 0.3,
            "name": "light",
            "labelNo" : "58162",
            "vr" : false,
            "labelName" : "Philips Alpha Outdoor Light",
            "details" : {name:"Philips Alpha Outdoor Light",color:"Anthracite",
                        material:"Aluminium",
                        dimention:"111x111x100",
                        lampBase: "LED Integrated",wattage:"12W",lumen_CCT : "950lm/3000K",price:"₹4,850/-"},
        },

        {
           
            "scale": 0.3,
            "name": "light",
            "labelNo" : "58163",
            "vr" : false,
            "labelName" : "Philips Trigon Outdoor Light",
            "details" : {name:"Philips Alpha Outdoor Light",color:"Anthracite",
                        material:"Aluminium",
                        dimention:"165x165x49",
                        lampBase: "LED Integrated",wattage:"9W",lumen_CCT : "550lm/3000K",price:"₹4,550/-"},
        },

        {
            
            "scale": 0.3,
            "name": "light",
            "labelNo" : "581863",
            "vr" : true,
            "labelName" : "Philips Caesar Chandelier",
            "details" : {name:"Philips Caesar Chandelier",color:"Mirror stainless steel",
                        material:"Beaded with class A clear crystal",
                        dimention:"400x400x190",
                        lampBase: "G9",wattage:"5x42W Max*",lumen_CCT : "Non-Integrated LED luminaire",price:"₹45,500/-"},
        },

        {
            
            "scale": 0.3,
            "name": "light",
            "labelNo" : "581904",
            "vr" : true,
            "labelName" : "Philips Splendora Chandelier",
            "details" : {name:"Philips Splendora Chandelier",color:"Chrome",
                        material:"Metal",
                        dimention:"Dia. 575 x H 213",
                        lampBase: "G9",wattage:"7x42W Max*",lumen_CCT : "Non-Integrated LED luminaire",price:"₹35,650/-"},
        },

        {
            
            "scale": 0.3,
            "name": "light",
            "labelNo" : "581968",
            "vr" : true,
            "labelName" : "Philips Shield Chandelier",
            "details" : {name:"Philips Shield Chandelier",color:"ABS shade chrome color + clear crystal",
                        material:"Metal, ABS & Class A Clear Crystal",
                        dimention:"Dia 518 x H 290",
                        lampBase: "E27",wattage:"5x40W Max*",lumen_CCT : "Non-Integrated LED luminaire",price:"₹45,500/-"},
        },

        {
            
            
            "scale": 0.3,
            "name": "light",
            "labelNo" : "581967",
            "vr" : true,
            "labelName" : "Philips Crystal Chandilier",
            "details" : {name:"Philips Crystal Chandilier",color:"Class A clear crystal with titanium gold round sheet with crystal chains inside",
                        material:"Metal & Class A Clear Crystal",
                        dimention:"Dia 480 x H 260",
                        lampBase: "G9",wattage:"6x42W Max*",lumen_CCT : "Non-Integrated LED luminaire",price:"₹57,500/-"},
        },      
        
    ]

    // const vr = productMarksList.filter((list)=> list.vr === false)

    const vr = productMarksList.filter((list)=>{
        return list.price = "₹57,500/-"
    })
    console.log(vr);
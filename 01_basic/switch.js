// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// key wo value jo mujhe har baar check krni h jaise below example me month hai
// agr break na lgaye jaha be case match ho gya uske aage ka sara ka sara code execute krta h except default isliye break important h bht 

const month = 3

switch (month) {
    case 1:
        console.log("January");        
        break;
    case 2:
        console.log("Feb");        
        break;
    case 3:
        console.log("March");        
        break;
    case 4:
        console.log("April");        
        break;

    default:
        console.log("Default Case Match");
        break;
}

// note take care of case sensitive key
const months = "jan"

switch (months) {
    case "jan":
        console.log("January");        
        break;
    case "feb":
        console.log("Feb");        
        break;
    case "march":
        console.log("March");        
        break;
    case "april":
        console.log("April");        
        break;

    default:
        console.log("Default Case Match");
        break;
}
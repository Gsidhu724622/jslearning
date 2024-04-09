// array
const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join();

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// Slice Splice
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("A", myArr)


// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("B", myArr)

// slice just give the value with the range include no change in the original array
// but splice give the range value include also change the original array 
// [ 1, 2 ]
// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// B [ 0, 4, 5 ]

const marval_hero = ["thor", "ironman", "spiderman"]
const dc_hero = ["superman", "flash", "batman"]

// marval_hero.push(dc_hero)

// console.log(marval_hero);
// console.log(marval_hero[3][1])
// const newArr = marval_hero.concat(dc_hero)
// console.log(newArr)

// spread operator
// const allHero = [...marval_hero, ...dc_hero] 
// console.log(allHero);

const mainArry = [1, 2, [6, 7], [3,9]]
const finalArry = mainArry.flat(Infinity);
console.log(finalArry);

// console.log(Array.isArray("Sidhu"));
// console.log(Array.from("Sidhu"));
console.log(Array.from({ name : "sidhu" }));  //important give empty because it cannot convert we have to tell convert key or value tpo arry

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3));
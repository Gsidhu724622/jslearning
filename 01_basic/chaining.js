const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map((num)=> num*10)
//                     .map((num)=> num + 1)
//                     .filter((num)=> num>41)

// console.log(newNum);

//,,,,,,,,,,REDUCE.................

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10


const newNum = myNum.reduce((acc, currval)=> acc + currval,0)
console.log(newNum);
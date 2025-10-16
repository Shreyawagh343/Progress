// reading a file
const fs = require("fs");

const content = fs.readFileSync("a.txt","utf-8");
console.log(content);

const content2 = fs.readFileSync("b.txt","utf-8");
console.log(content2);

// function twoSum(a,b){
//     return a+b;
// }

// let result = twoSum(2,4);
// console.log(result);

// // sum of 1 to n number

// function sumofNo(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum += i;
//     }

//     return sum;
// }

// let result2 = sumofNo(5);
// console.log(result2);




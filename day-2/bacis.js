 // libray for file read
 const fs = require("fs");

 
 // if conditional

 let age = 18 ;
 if(age > 18){
    console.log("adult");
 }else {
    console.log("not adult")
 }

 // array 

 let array = ["shreya","deepanshu","kalyani","varsha"];

 for(let i=0;i<array.length; i++){
console.log(array[i]);
 }

 // object

 let user = {
    name:"shreya",
    age : 22,
    gender : "female"
 }

 console.log(user.name);

 let users = [ {
    name:"shreya",
    age : 22,
    gender : "female"
 },{
    name:"reya",
    age : 25,
    gender : "female"
 },{
    name:"shya",
    age : 27,
    gender : "female",
    address : {
        city:"nagpur",
        state :"maharashtra"
    }
 }]

  console.log(users[0].name);
  console.log(users[1].name);
  console.log(users[2].name);
  console.log(users[2].address.city);

  // function 
  function printadd(num1,num2){
    return num1*num2;
  }
  console.log(printadd(2,3));

  // arrow function

  let printadds = (no1,no2) =>{
    return no1*no2;
  }

  let result = printadd(4,5);
  console.log(result);

  // read a file
  function print(err,t){
    if(err){
        console.log("file not found");
    } else {
        console.log(t); 
    }
  }
fs.readFile("a.txt","utf-8",print);

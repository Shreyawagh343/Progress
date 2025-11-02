// conditional statements

let age =19;
if(age>18){
    console.log("can be vote");
}else {
    console.log("can't be vote")
}

// tenary operator
let result1= age>18 ? "adult" :"not adult";
console.log(result1);//


// array 
 
let array = ["shreya", "varsha","yash","kalyani"];

for(let i=0;i<array.length;i++){
    console.log(array[i]); 
}

// objects 

let user = [{
    name:"shreya",
    age : 22,
    address: {     
        city:"Nagpur",
        country:"India"
    }
},
{
    name:"yash",
    age:30
}]

console.log(user[0].age);
console.log(user[0].address.city);
console.log(user[1].name);
console.log(user[1].age);

// function 
function printname(name){
    console.log(name);
}
 
printname("shreya");

// arrow function 

let myfunction = (num1,num2) => {
    return num1+num2;
}

let result = myfunction(2,3);
console.log(result);
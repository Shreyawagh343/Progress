function settimeoutpromified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    }) 
};

async function solve(){
    await settimeoutpromified(1000);
    console.log("hi");
    await settimeoutpromified(2000);
    console.log("hello");
    await settimeoutpromified(4000);
    console.log("hellooo shreyaaa");

}

solve();

// read a file 
const fs = require("fs");

function readFile(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err ,data){
            if(err){
                reject("file not found");
            } else {
                 resolve(data);
            }
        })
})
}; 

async function solvingReading() {
     try {
        let data = await readFile();
     console.log(data);
     }
     catch(err) {
        console.log(err);
     }
}
solvingReading();
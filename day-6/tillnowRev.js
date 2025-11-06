// new promise 

const fs = require("fs");
function settimeoutPromisefied(){
    return new Promise(function(resolve,reject){
        
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                reject("file not found");
            }else {
                resolve(data);
            }
        })
    })
  
}
async function solve(){
    try {
        let data = await settimeoutPromisefied();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

solve();

// aync await 

async function leanFun() {
    await settimeoutPromisefied(1000);
    await settimeoutPromisefied(3000);
    
}

leanFun();
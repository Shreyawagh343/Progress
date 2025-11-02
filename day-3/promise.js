const fs = require("fs");

function callback(err, data){
if(err){
    console.log("file not clean");
} else {
    console.log("file is clean");
}

}

let fs = new promiseHooks()

fs.cleanFile("a.txt","utf-8").then(callback);

// function random(r) {
//     r();
// }

// let p = new Promise(random);

// function callback(){
//     console.log("it succsed");
// }
// p.then(callback)







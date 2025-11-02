let p = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve("i love you");
        reject(" i dont love you");
    },3000)
});

function value(callback){
    console.log(callback);
}

p.then(value);
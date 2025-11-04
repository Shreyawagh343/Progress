// promise

function settimeoutpromified(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("shreya is great");
            reject("shreya is dumb");
        },3000);
    })
}

function value(callback){
    console.log(callback);
}

settimeoutpromified().then(value);

// promise channing

function settimeoutpromified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    }) 
};

settimeoutpromified(1000).then(function(){
    console.log("hi");
    return settimeoutpromified(5000);
}).then(function(){
    console.log("hello");
    return settimeoutpromified(5000);
}).then(function(){
    console.log("helllooo shreya");
});
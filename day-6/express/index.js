
const express = require("express");
const app =express();
function sum(n){
    let a = 0;
    for( let i=0;i<=n;i++){
         a+=i;
    }

}

app.get("/",function(req,res){
    const n = req.qurey.n;
    const ans = sum(n);
    res.send(ans.toString());
})

app.listen(3000);
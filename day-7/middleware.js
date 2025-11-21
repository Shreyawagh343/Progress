const express = require("express");
const app = express();
app.use(express.json());

function middlewareFu(req,res,next){
    let age = req.query.age;
    if(age >= 18){
        next();
    }else {
        res.status(401).json({
            msg:"you are under age"
        })
    }
} 



app.use(middlewareFu);
app.get("/",function(req,res){
    res.json({
        msg: " you can ride"
    })

})
app.get("/ride1",function(req,res){
    res.json({
        msg: " you can ride"
    })

})
app.get("/ride2",function(req,res){
    res.json({
        msg: " you can ride"
    })

})

app.listen(4000);
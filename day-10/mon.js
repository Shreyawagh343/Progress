const express = require("express");
const app =  express();
const {usermodel,todomodel} = require("./db.js");
const jwt = require('jsonwebtoken');
const JWT_SECERT = "SHREYAILOVEYOU";
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learning")

app.use(express.json());

function auth(req,res,next){
    const token = req.headers.token;
    const decodeddata = jwt.verify(token,JWT_SECERT);
    if(decodeddata){
        req.userId = decodeddata.id;
        next();
    }else {
        res.json({
            msg:"you have to login"
        })
    }
}

app.post("/signup",async function(req,res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await usermodel.create({
        email:email,
        name:name,
        password:password
    })

    res.json({
        msg:"you have sign-up!!"
    })

    
})
app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

   const user = await usermodel.findOne({
        email: email,
        password: password,})

        if(user){
            const token = jwt.sign({
                id : user.id.toString()
            }, JWT_SECERT)
            user.token = token;
            res.json({
                token:token
            })
        }else {
            res.json({
                msg:"something is wrong"
            })
        }

})
app.get("/todos",auth,function(req,res){

    const userId = req.userId;

    res.json({
        userid : userId
    })

})
app.post("/todo",auth ,function(req,res){
     const userId = req.userId;

     res.json({
        userid : userId
    })


})

app.listen(3000);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECERT = "shreyaisverystupid";
const {usermodel} = require("./revmon.js")

mongoose.connect("mongodb://127.0.0.1:27017/revision")

app.use(express.json());

function auth(req,res,next){
    const token = req.headers.token;
    const users = jwt.verify(token , JWT_SECERT);
    if(users){
    req.userId = users.id;
    next();
    }else {
        res.json({
            msg: " you are not login!!"
        })
    }
}

app.post("/signup", async function(req,res){

    const username = req.body.username;
    const email= req.body.email;
    const password = req.body.password;

    await usermodel.create({
        username : username,
        email : email,
        password : password
    })

    res.json({
        msg: "you have signup!!"
    })
    
})
app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await usermodel.findOne({
        email: email,
        password : password
    })

    if(user){
        const token = jwt.sign({
            id : user.id.toString()
        }, JWT_SECERT);
        user.token = token

        res.json({
            token : token
        })
    }else {
        res.json({
            msg:"something is wrong"
        })
    }


})
app.get("/todo" , auth ,function(req,res){
    const userId = req.userId;
    res.json({
        userid: userId
    })

})
app.get("/todo/:shreya",function(req,res){
    const username = req.params;

    res.json({
        username: username
    })

})


app.listen(3000);
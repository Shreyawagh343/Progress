const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECERT = "SHREYAILOVEYOU";
app.use(express.json());

const users = [];
app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password:password
    })

    res.json({
        msg : "you have sign-up!!"
    })
})
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username == username && u.password == password);

    if(user){
        const token =jwt.sign({
        username:username
    }, JWT_SECERT);
    user.token = token;
    res.json({
        token : token
    })

    }
})
app.get("/me",function(req,res){
    const token = req.headers.token;
    const findToken = jwt.verify(token , JWT_SECERT);
    const username = findToken.username;

    const user = users.find(u=> u.username == username)

    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else {
        res.json({
            msg : "token is invalid"
        })
    }

    


})

app.listen(3000);
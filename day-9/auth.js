const express = require("express");
const app = express();
app.use(express.json());

let users = [];

// token generate
function generateToken()  {
    let token = '';
    let options = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z','1','2','3','4','5','6','7','8'];
    for(let i=0;i<=32;i++){
        token +=Math.floor(Math.random()*options.length)
    }
    return token;
    
}

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password:password
    })

    res.json({
        msg:"you have sign-up!!"
    })

    
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const findUser = users.find(u => u.username==username && u.password == password);
    if(findUser){
        const token = generateToken();
        findUser.token = token;
        res.json({
            token:token
        })
    }


})
// to check the token to access any route
app.get("/me",function(req,res){
    let token = req.header.token;
    let user = users.find(u=> u.token ==token);

    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
    }else {
        res.status(401).json({
            msg:"token is invalid"
        })
    }


})

app.listen(3000);
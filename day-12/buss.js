const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.json({
        msg:"shreya you have to do it"
    })
})
app.listen(3000);
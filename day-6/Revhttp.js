const express = require("express");
const app = express();
app.use(express.json());

app.get("/multiply/:a",function(req,res){
    const a = req.params;
    res.json({
        answer : a
    })


});

app.listen(5000);
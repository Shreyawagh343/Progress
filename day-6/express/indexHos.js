const express = require("express");
const app = express();
app.use(express.json());

let users = [
    {
        name:"shreya",
        kidneys:[
            {
                healthly:true
            }
        ]
    }
]

app.get("/",function(req,res){
    let shreyalength = users[0].kidneys;
    let numberofkidneys = shreyalength.length;
    let numberofheakid = 0;
    for( let i=0;i<shreyalength.length;i++)
{
    if(shreyalength[i].healthly){
        numberofheakid +=1;
    }

    let numberofunheakid = numberofkidneys - numberofheakid;

    res.json({
        numberofkidneys,
        numberofheakid,
        numberofunheakid
    })
}})
app.post("/",function(req,res){
    let isheatly = req.body.isheatly;
    users[0].kidneys.push({
        healthly : isheatly
    })
    res.json({
        msg:"done"
    })
    
})
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys.healthly = true;
    }

    res.json({
        
    })

    
})

app.listen(3001);
async function fetchFun() {
    let response = await fetch("dbeioefboe",{
        method :"POST",
        headers :{
            authrojld : "bdbdwg"     
        },
        body : {
            username : "shreya",
            age :22
        }.then(() => {
            let data = response.json();
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    });
}

async function axoisFun() {
    let res = await axois({
        url :" ",
        method :"post",
        headers :{
            "sbiv":"dbjs"
        },
        data :{
            username:"shreya",
            age : 22
        }
    }).then(()=>{
        console.log(res.data); 
    })
}
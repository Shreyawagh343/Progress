const data = async ()=>{
    const res = await axios({
        url:"hls",
        method : "POST",
        headers:{
            token:localStorage.setItem("token")
        }
    },{
        username
    } 
)
}
import { useState } from "react"
import Topbar from "./Components/Topbar"

function App() {
  const [posts , setposts] = useState([{
        username:"shreya",
        password : "12345"
        }])

        function toggle(){
          setposts([...posts , {
            username:"raman",
        password : "34523"
          }])
        }

        const postman = posts.map((post)=><Topbar
        username = {post.username}
        password={post.password}        />)

  return (
    <>
    <div style={{backgroundColor:"grey" , height:"10rem" , width:"30%", color:"white"}}>
    <button onClick={toggle}>Add posts</button>
    <div>{postman}</div>
    </div>
    

    </>
  )
}

export default App

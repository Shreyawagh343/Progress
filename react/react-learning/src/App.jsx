import Lists from "./Components/Lists"


function App() {
  // const [posts , setposts] = useState([{
  //       username:"shreya",
  //       password : "12345"
  //       }])

  //       function toggle(){
  //         setposts([...posts , {
  //           username:"raman",
  //       password : "34523"
  //         }])
  //       }

  //       const postman = posts.map((post)=><Topbar
  //       username = {post.username}
  //       password={post.password}        />)

  // const users = [{
  //       title:"shreya",
  //       done:false
  //   },{

  //       title:"varsha",
  //       done:true
  //   }]

  //   users.map((todo)=> <Topbar title={todo.title}  dono={todo.dono}/>)

  return (
    <>
    {/* <div style={{backgroundColor:"grey" , height:"10rem" , width:"30%", color:"white"}}>
    <button onClick={toggle}>Add posts</button>
    <div>{postman}</div>
    </div>
     */}
     <Lists/>
     {/* <Childprop>
      <div style={{color:"black"}}>
        <input type="text" />
      </div>
    </Childprop>
    <Childprop>
      <div>
        <h1>hi there</h1>
        <p>shreya is great</p>
      </div>
    </Childprop> */}
    </>
  )
}

export default App

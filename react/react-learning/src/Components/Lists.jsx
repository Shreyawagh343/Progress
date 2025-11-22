import Topbar from "./Topbar"


function Lists() {
    
    const users = [{
        title:"shreya",
        done:false
    },{

        title:"varsha",
        done:true
    }]

  return (
    <div>
       {users.map((todo)=> <Topbar title={todo.title}  dono={todo.dono}/>)}
    </div>
  )
}

export default Lists
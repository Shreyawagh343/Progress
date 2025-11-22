


function Topbar({title , dono}) {
    // const [ invisble , setinvisble] = useState(false)
  return (
    <>

    <div style={{backgroundColor:"grey" , height:"10rem" , width:"30%", color:"white"}}>
    
    <div>
    {<h1>{title}</h1>}
            {dono ? "done" : "not-done"}
            <p>12m</p>
        </div>
        <div>
            <p>gcihcgicbiewbfciewbufcbewuvbcfuveducvvuedcvuevdcdc</p>
        </div>
        </div>

        
        {/* <button onClick={()=>{
            setinvisble(!invisble)
        }}>toggle button</button>
        {invisble && <p>The message is seen</p>} */}

        </>
  )
}

export default Topbar
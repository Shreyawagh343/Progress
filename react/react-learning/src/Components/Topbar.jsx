import { useState } from 'react'

function Topbar() {
    const [ invisble , setinvisble] = useState(false);
  return (
    <>
{/* <div style={{backgroundColor:"grey" , height:"10rem" , width:"30%", color:"white"}}>
    
    <div>
    {title !==undefined && <h1>{title}</h1>}
            <p>28,000 follows</p>
            <p>12m</p>
        </div>
        <div>
            <p>gcihcgicbiewbfciewbufcbewuvbcfuveducvvuedcvuevdcdc</p>
        </div>
        </div> */}
        
        {/* <button onClick={()=>{
            setinvisble(!invisble)
        }}>toggle button</button>
        {invisble && <p>The message is seen</p>} */}

        </>
  )
}

export default Topbar
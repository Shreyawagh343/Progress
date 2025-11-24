import React, { useEffect,useState } from 'react'

function Useref() {
    const [value , setvalue]= useState(1);

    useEffect(function(){
        setInterval(function(){
            setvalue(c => c+1);
        },1000)
    },[])
       

    function stopclock(){
        clearInterval(value);
    }
  return (
    <div>
        {value}
        <div style={{display:"flex"}}
        >
            
        </div>
    </div>
  )
}

export default Useref
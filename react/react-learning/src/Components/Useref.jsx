import { useCounter } from "./usecount";

 
function Useref() {
    const { count , increaseCount} = useCounter();
  return (
    <div>
        {count}
        <div style={{display:"flex"}}
        >
          <button onClick={increaseCount}>increase</button>  
        </div>
    </div>
  )
}

export default Useref
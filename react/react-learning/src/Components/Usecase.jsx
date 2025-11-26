import { useCounter , usePrev} from "./customHooks.js";


function Usecase() {
   const { count , increaseCount} = useCounter() ;
    const prev =usePrev(count)
  return (
    <div>
        <p>{count}</p>
        <button onClick={increaseCount}>increase Count</button>
        <p>the previous value is {prev}</p>
    </div>
  )
}


export default Usecase
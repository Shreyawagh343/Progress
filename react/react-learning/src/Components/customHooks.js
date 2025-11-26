import { useEffect, useRef ,  useState } from "react";



export function useCounter(){    
    const [count , setcount] = useState(0);

    function increaseCount(){
        setcount(count + 1);
    }

    return {
        count : count,
        increaseCount : increaseCount
    }
}

export function useFetch(url){
    const [getdata , setgetdata] = useState({});

    async function getdetails(){
        const res = await fetch(url);
        const data = await res.json();
        setgetdata(data);
    }

    useEffect(()=>{
        getdetails();
    },[])

    return getdata
    
}

export function usePrev(value){
    const ref = useRef();

    useEffect(()=>{
        ref.current = value
    },[value])

    return ref.current
}
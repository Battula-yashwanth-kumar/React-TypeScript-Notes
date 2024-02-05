import React,{ useState,useRef,useEffect } from "react";
export const MutableRef=()=>{
    const [Timer,setTimer]=useState(0)
    const intervalRef =useRef<number|null>(null)
    const stopTimer=()=>{
        if(intervalRef.current){
            window.clearInterval(intervalRef.current)
        }
}
useEffect(()=>{
    intervalRef.current=window.setInterval(()=>{
        setTimer((timer)=>timer+1)
    },1000)
    return ()=>{
        stopTimer()
    }
},[])
return(
    <div>
        HookTimer -{Timer}-
        <button onClick={()=>stopTimer()}>stopTimer</button>
    </div>
)
}
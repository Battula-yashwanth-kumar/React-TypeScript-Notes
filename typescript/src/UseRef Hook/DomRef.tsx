import React,{ useRef,useEffect } from "react";
export const DomRef =()=>{
    const inputRef=useRef<HTMLInputElement>(null!)
    useEffect(()=>{
        inputRef.current.focus()

    },[])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}
/*

import { DomRef } from "./UseRef Hook/DomRef.tsx";
import { MutableRef } from "./UseRef Hook/MutableRef.tsx";

function App() {
  
  return (
    <div className="App">
      <DomRef/>
      <MutableRef />
        
          

    </div>

  )
}

export default App;
*/
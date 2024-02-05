import { useReducer } from "react";
import React from "react";
type CounterState={
    count:number
}
type UpdateAction={
    type:'increment'|'decrement'
    payload:number
}
type RestAction={
    type:'reset'
}
type CounterAction= UpdateAction | RestAction
const initialstate={count:0}
function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return {count:state.count+action.payload}
        case 'decrement':
            return {count:state.count-action.payload}
        case 'reset':
            return initialstate
        default:
            return state
    }
}
export const StrictCounter=()=>{
    const [state,dispatch] =useReducer(reducer,initialstate)
    return (
        <div>
            Count:{state.count}
            <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>
    )
}


/* 
App.js

import { StrictCounter } from "./UseReducerHook/StrictCounter.tsx";

function App() {
  
  return (
    <div className="App">
     <StrictCounter />

    </div>

  )
}

export default App;

*/
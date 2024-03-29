import { useReducer } from "react";
import React from "react";
type CounterState={
    count:number
}
type CounterAction={
    type:string
    payload:number
}
const initialstate={count:0}
function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return {count:state.count+action.payload}
        case 'decrement':
            return {count:state.count-action.payload}
        default:
            return state
    }
}
export const Counter=()=>{
    const [state,dispatch] =useReducer(reducer,initialstate)
    return (
        <div>
            Count:{state.count}
            <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement</button>

        </div>
    )
}
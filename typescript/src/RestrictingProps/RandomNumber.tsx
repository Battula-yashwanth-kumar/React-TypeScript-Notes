import React from "react"
type RandomNumberType={
    value:number
}
type PostivieNumber=RandomNumberType &{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}
type NegativeNumber=RandomNumberType & {
    isPositive ?:never
    isNegative:boolean
    isZero?:never

}
type Zero=RandomNumberType & {
    isZero :boolean
    isPositive ?:never
    isNegative?:never

}
type RandomNumberProps = PostivieNumber|NegativeNumber|Zero

export const RandomNumber=({ value,isPositive,isNegative,isZero}:RandomNumberProps)=>{
    return (
        <div>
            {value}{isPositive && "positive"}{isNegative && "negative"}{isZero && "Zero"}
        </div>
    )
}

/*
App.js

import { RandomNumber } from "./RestrictingProps/RandomNumber.tsx";
function App() {
  
  return (
    <div className="App">
     <RandomNumber value={10} isPositive />
  </div>
    

  )
}

export default App;
*/
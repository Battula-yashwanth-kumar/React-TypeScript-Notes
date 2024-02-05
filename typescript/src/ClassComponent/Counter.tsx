import React,{ Component } from "react";
type CounterProps={
    message:string
}
type CounterState={
    count:number
}
export class Counter extends Component<CounterProps,CounterState>{
    state={
        count:0,
    }
    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render() {
        return(
            <div>
          <button onClick={this.handleClick}>Increment</button>
          {this.props.message}{this.state.count}
            </div>
        )
        
    }
}
/*
App.js

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
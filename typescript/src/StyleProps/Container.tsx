import React from "react"
type ContainerProps={
    style:React.CSSProperties
}
export const Container=(props:ContainerProps)=>{
    return <div style={props.style}>Text goes Here</div>
}

/*
App.js

import { Container } from "./StyleProps/Container.tsx";

function App() {

  return (
    <div className="App">
      <Container style={{border:'1px solid red',
      padding:'1rem'}} />
      
    </div>
  )
}

export default App;

*/

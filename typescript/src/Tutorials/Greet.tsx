import React from 'react';
type GreetProps={
    name :String
}

export const Greet=(props:GreetProps)=>{
    return(
        <div>
            <h2> {props.name} ! Welcome to React Typescript Tutorials </h2>
        </div>
    )
}

/*
App.js 

import { Greet } from './Tutorials/Greet.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name ="Yashwanth" />
      
    </div>
  );
}

export default App; */
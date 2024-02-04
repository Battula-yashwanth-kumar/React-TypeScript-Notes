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

import { Greet } from './Tutorials/BasicProps/Greet.tsx';
import { Person } from './Tutorials/BasicProps/Person.tsx';
import { PersonList } from './Tutorials/BasicProps/PersonList.tsx';
import './App.css';

function App() {
  const personName={
    first:'Bruce',
    last:'Wayne',
  }
  const nameList=[
    {
      first:'Bruce',
    last:'Wayne',
    },
    {
      first:'Hello',
    last:'Auto',
    }
  ]
  return (
    <div className="App">
      <Greet name ="Yashwanth" />
      <Person name={personName} />
      <PersonList names={nameList} />
      
    </div>
  );
}

export default App;

 */
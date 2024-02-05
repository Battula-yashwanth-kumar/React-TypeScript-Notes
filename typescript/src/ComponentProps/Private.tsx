import React, { Component } from "react";
import {ProfileProps} from './Profile'
type PrivateProps={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}
export const Private=({isLoggedIn,component:Component}:PrivateProps)=>{
    if(isLoggedIn){
        return <Component name ='Yash' />
    }
    else{
        return <div>Please Login</div>
    }

}

/* 
App.js


import { Private } from "./ComponentProps/Private.tsx";
import { Profile } from "./ComponentProps/Profile.tsx";

function App() {
  
  return (
    <div className="App">
      
      <Private isLoggedIn ={true} component={Profile} />  
          

    </div>

  )
}

export default App;
 */
import React, { useState } from "react";
type AuthUser={
    name:string
    email:string
}
export const User=()=>{
    const [user,setuser] = useState<AuthUser|null>(null)
    const handleLogin=()=>{
        setuser({
            name:"hello",
            email:"hello@gmail.com"
        })
    }
    const handleLogout=()=>{
        setuser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{user?.name}{user?.email}</div>
        </div>
    )
}
 // ? ---> if user is null then user.email does not gives error

 // if you know user will not logout that means user variable will not be null then you can remove '?'

 /*

 import React, { useState } from "react";
type AuthUser={
    name:string
    email:string
}
export const User=()=>{
    const [user,setuser] = useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setuser({
            name:"hello",
            email:"hello@gmail.com"
        })
    }
    const handleLogout=()=>{
        setuser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
           
            <div>{user.name}{user.email}</div>
        </div>
    )
}
*/

/*
App.js 

import { User } from "./UseState/User.tsx";

function App() {
  
  return (
    <div className="App">
     <User />

    </div>

  )
}

export default App;

*/
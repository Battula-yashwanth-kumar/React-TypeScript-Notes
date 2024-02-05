import { UserContext } from "./UserContext.tsx";
import React,{ useContext } from "react";
export const User=()=>{
    const userContext =useContext(UserContext);
    const handleLogin=()=>{
        userContext.setUser({
            name:'Yash',
            email:'yash@gmail.com'
        })
    }
    const handleLogout=()=>{
        userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{userContext.user?.name}</div>
            <div>{userContext.user?.email}</div>
        </div>
    )

}

/*
App.js

import { User } from "./UseContextHookforFuturevalue/User.tsx";
import { UserContextProvider } from "./UseContextHookforFuturevalue/UserContext.tsx";

function App() {
  
  return (
    <div className="App">
        
        <UserContextProvider><User /></UserContextProvider>     

    </div>

  )
}

export default App;

*/

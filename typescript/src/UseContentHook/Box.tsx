import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.tsx";
export const Box=()=>{
    const theme=useContext(ThemeContext)
    return(
        <div style={{backgroundColor:theme.primary.main,color:theme.primary.text}}>
            Theme Context
        </div>
    )
}


/*
App.js

import { ThemeContextProvider } from "./UseContentHook/ThemeContext.tsx";
import { Box } from "./UseContentHook/Box.tsx";

function App() {
  
  return (
    <div className="App">
     <ThemeContextProvider>
      <Box />
     </ThemeContextProvider>

    </div>

  )
}

export default App;

*/

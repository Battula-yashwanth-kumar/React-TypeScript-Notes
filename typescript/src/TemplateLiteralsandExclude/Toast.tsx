import React from "react";

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

/* App.js

import { Toast } from "./TemplateLiteralsandExclude/Toast.tsx";
function App() {
  
  return (
    <div className="App">
     <Toast position="center-center" />
  </div>
    

  )
}

export default App;
*/
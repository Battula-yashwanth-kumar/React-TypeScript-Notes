import { Greet } from './Tutorials/Greet.tsx';
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
      
    </div>
  );
}

export default App;

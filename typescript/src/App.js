import './App.css';
import { Greet } from './Tutorials/AdvancedProps/Greet';
import { Heading } from './Tutorials/AdvancedProps/Heading';
import { Oscar } from './Tutorials/AdvancedProps/Oscar';
import { Status } from './Tutorials/AdvancedProps/Status';


function App() {

  return (
    <div className="App">
      <Status status='loading' />
      <Heading>Placeholder text </Heading>
      <Oscar>
        <Heading>
          Oscar goes to Lenardo Dicpario!
        </Heading>
      </Oscar>
      <Greet name='yash' isLoggedIn={true} />


    </div>
  );
}

export default App;

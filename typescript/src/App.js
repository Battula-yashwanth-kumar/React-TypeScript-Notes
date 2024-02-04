import { Button } from "./EventProps/Button";
import { Input } from "./EventProps/Input";


function App() {

  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />
      <Input value='' handleChange={(event) => console.log(event)} />



    </div>
  );
}

export default App;

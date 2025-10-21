
import { useState } from 'react';
import './App.css';

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((numbers) =>
    <li> {number}</li>
); 
return(
  <u1> {listItems}</u1>
)


}
const num = [1, 2, 47];
constnames=["john", "Sara", "Smith"]
function App() {
  
  const [val, setVal] = useState(0);
  const [name, setName] = useState("")
  return (
    <div className="App">
      <NumberList numbers = {nums}/>
      <NumberList numbers = {names}/>
      <h1> Current Value {val} </h1>
      <button onClick={()=>setVal(val+1)}>Increment Value </button>
      <button onClick={()=>setVal(val-1)}>Decrement Value </button>
      
      {val>=50000&& <h3> Value is greater than or equal to 50000</h3>}
      <input type = "text"
       onChange={(e) => setName(e.target.value)} />

      <h3>Welcome {name} </h3>

    </div>
  );
  
}

export default App;

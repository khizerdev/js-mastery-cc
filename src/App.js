import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)
  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCounter) => prevCounter -1)}>-</button>
      Counter : {counter}
      <button onClick={() => setCounter(counter+1)}>+</button>
    </div>
  );
}

export default App;

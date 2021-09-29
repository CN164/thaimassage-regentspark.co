import React, { useState } from 'react'
import './App.scss';
import ProductComponent from './Components/ProductComponent.jsx'

function App() {

  const [count, setCount] = useState(0)
  
  const addNumber = () => {
    setCount(count+1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <ProductComponent></ProductComponent>
      <button className="btn" onClick={addNumber} >Increase</button>
      <button className="btn" onClick={reset} >Reset</button>
      {count}
    </div>
  );
}

export default App;

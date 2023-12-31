import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countColor, setCountColor] = useState('#333');

  const increaseCount = () => {
    setCount(count + 1);
    setCountColor('#008000');
  };

  const decreaseCount = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    setCountColor(newCount === 0 ? '#333' : '#ff0000');
  };

  const reset = () => {
    setCount(0);
    setCountColor('#333');
  };

  return (
    <div className="App">
       <div className="buttons-container">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={reset}>Set to Zero</button>
      </div>
      <h1 style={{ color: countColor }}>{count}</h1>
    </div>
  ); 
}
export default App;

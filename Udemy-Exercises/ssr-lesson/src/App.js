import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="wrapper">
      <div className="count">{count}</div>
      <button className="left" onClick={increment}>Increment</button>
      <button className="right" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

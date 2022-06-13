import React, { useState } from "react";

function App() {
  const [value, fn] = useState(0);

  function increase() {
    fn(value + 1);
  }
  function decrease() {
    fn(value - 1);
  }

  return (
    <div className="container">
      <h1>{value}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

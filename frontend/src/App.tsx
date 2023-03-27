import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function GoButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button>GO</button>
      <br />
      <label>{count}</label>
    </div>
  );
}

function App() {
  return (
    <div>
      <GoButton />
    </div>
  );
}

export default App;

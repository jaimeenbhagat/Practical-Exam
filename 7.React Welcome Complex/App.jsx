import React, { useState } from 'react';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const defaultName = "Jaimeen";
  const [name, setName] = useState(defaultName);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleReset = () => {
    setName(defaultName);
  };

  return (
    <div className="app-container">
      <Welcome name={name} />
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="name-input"
      />
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = "Jaimeen"; // You can change this

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="app-container">
      <WelcomeMessage isLoggedIn={isLoggedIn} username={username} />
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default App;

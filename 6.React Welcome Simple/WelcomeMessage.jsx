import React from "react";
import "./WelcomeMessage.css";

const WelcomeMessage = ({ isLoggedIn, username }) => {
  return (
    <div className="message-box">
      <h2>{isLoggedIn ? `Welcome, ${username}!` : "Please log in"}</h2>
    </div>
  );
};

export default WelcomeMessage;

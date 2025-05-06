import React from 'react';
import './Welcome.css';

function Welcome(props) {
  return (
    <h1 className="welcome-msg">Welcome, {props.name}!</h1>
  );
}

export default Welcome;

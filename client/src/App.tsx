import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Trips App</h1>
        <h3>Created by Vail Arvia</h3>

        <a
          className="App-link"
          href="/trips"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Get Started!
        </a>
      </header>
    </div>
  );
}

export default App;

import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import AllTripsComponent from "./components/AllTrips.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Trips App</h1>
        <h3>Created by Vail Arvia</h3>
        <div>
          <AllTripsComponent />
        </div>
      </header>
    </div>
  );
}

export default App;

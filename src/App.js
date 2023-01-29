import React from "react";
import goleta from "./goleta.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="goleta-profile" src={goleta} style={{ height: "40vh" }} />
      </header>
      <h1>GOLETA</h1>
      <h1>April 2023</h1>
      <h1>YOU</h1>
      <h1>YOUR BOYS</h1>
      <h1>START STRETCHING</h1>
    </div>
  );
}

export default App;

import React from "react";
import malc from "./malcolm.jpg";
import insta from "./instagram.png";
import linkedin from "./linkedin.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="malc-profile" src={malc} style={{ height: "40vh" }} />
      </header>
      <h1>Hi there!</h1>
      <p>This is Malcolm Kerr's budding website, stay tuned for updates.</p>
      <div className="social-section">
        <p>
          <a
            className="social-tile"
            href="https://www.linkedin.com/in/malcolm-kerr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" alt="linked-in-icon" src={linkedin} />
            LinkedIn
          </a>
        </p>
        <p>
          <a
            className="social-tile"
            href="https://www.instagram.com/malclorbkerr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" alt="instagram-icon" src={insta} />
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

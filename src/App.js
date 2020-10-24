import React from 'react';
import malc from './malcolm.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<img alt="malc-profile" src={malc} style={{height:"40vh"}} />
	<p>
		Happy birthday Malcolm!
	</p>
      </header>
    </div>
  );
}

export default App;

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
	<p>
		I went snooping through AskJeeves and realized I couldn't find your personal website.
	</p>
  	<p>
	  I thought to myself, that can't be! Malcolm is a young professional with a strong and growing brand. He must have a personal website!
	</p>
  	<p>
	  But alas, no. So for your birthday, let me offer my services! If you'd like, I'd be happy to help you build your personal website. In the meantime, I've registered this domain to keep it safe for you when you want it.
  	</p>
	  <p>
	  If not, np. I've donated $50 in your name to Joe Biden's campaign as a backup gift. Let me know!
	  </p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entry point of the Explorer micro frontend React app.
   * Renders the default explorer micro frontend landing page.
   */
  return (
    <div className="App">
      <header className="App-header">
        <h2>Explorer Micro Frontend</h2>
        <p>
          This is a standalone React application for the <b>Explorer</b> module.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

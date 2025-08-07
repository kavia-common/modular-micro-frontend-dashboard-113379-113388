import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entry point of the Templates micro frontend React app.
   * Renders the default templates micro frontend landing page.
   */
  return (
    <div className="App">
      <header className="App-header">
        <h2>Templates Micro Frontend</h2>
        <p>
          This is a standalone React application for the <b>Templates</b> module.
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

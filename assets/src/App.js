import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entry point of the Assets micro frontend React app.
   * Renders the default assets micro frontend landing page.
   */
  return (
    <div className="App">
      <header className="App-header">
        <h2>Assets Micro Frontend</h2>
        <p>
          This is a standalone React application for the <b>Assets</b> module.
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

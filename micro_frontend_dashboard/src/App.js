import React, { useState, useEffect } from 'react';
import './App.css';
import { AssetsApp } from './modules/assets';
import { ExplorerApp } from './modules/explorer';
import { TemplatesApp } from './modules/templates';

// Dashboard Shell Layout Constants
const NAV_OPTIONS = [
  { key: 'assets', label: 'Assets' },
  { key: 'explorer', label: 'Explorer' },
  { key: 'templates', label: 'Templates' },
];

// Top Navigation Bar
function TopNavBar({ current, onSwitch, theme, toggleTheme }) {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        height: 60,
        background: "var(--bg-secondary, #f8f9fa)",
        borderBottom: "1px solid var(--border-color, #e9ecef)",
        padding: "0 2rem",
        justifyContent: "space-between"
      }}
    >
      <div style={{display: "flex", alignItems: "center"}}>
        <span style={{
          fontWeight: 700,
          color: "var(--text-secondary, #61dafb)",
          fontSize: 22,
          marginRight: "2rem",
          letterSpacing: "0.5px"
        }}>
          🧩 MCS Dashboard
        </span>
        {NAV_OPTIONS.map(opt => (
          <button
            key={opt.key}
            className="btn"
            aria-current={current === opt.key}
            style={{
              background: current === opt.key ? "var(--button-bg, #007bff)" : "transparent",
              color: current === opt.key ? "var(--button-text, #fff)" : "var(--text-primary, #282c34)",
              border: "none",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 6,
              margin: "0 0.5rem",
              padding: "0.5rem 1.1rem",
              cursor: current === opt.key ? "default" : "pointer",
              opacity: current === opt.key ? 1 : 0.8,
              outline: current === opt.key ? "2px solid var(--border-color,#e9ecef)" : "none"
            }}
            onClick={() => current !== opt.key && onSwitch(opt.key)}
            tabIndex={0}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        style={{marginLeft: 16}}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

// Left Side Menu (placeholder for dashboard host controls)
function SideMenu() {
  return (
    <div
      style={{
        width: 200,
        background: "var(--bg-secondary, #f8f9fa)",
        borderRight: "1px solid var(--border-color, #e9ecef)",
        height: "100%",
        paddingTop: 24,
        minWidth: 140
      }}
    >
      <div
        style={{
          fontWeight: 600,
          color: "var(--text-secondary, #61dafb)",
          marginBottom: 10,
          fontSize: 16,
        }}
      >
        🛠 Host Menu
      </div>
      <ul style={{ listStyle: "none", padding: 0, fontSize: 15, color: "var(--text-primary, #282c34)" }}>
        <li style={{margin: "1rem 0", opacity: 0.7}}><em>...add host actions...</em></li>
      </ul>
    </div>
  );
}

// Main Content Area to mount the current micro frontend
function ModuleDisplay({ active }) {
  switch (active) {
    case 'assets':
      return <AssetsApp />;
    case 'explorer':
      return <ExplorerApp />;
    case 'templates':
      return <TemplatesApp />;
    default:
      return (
        <div style={{padding: "2rem"}}>
          <h3>Unknown Module</h3>
        </div>
      );
  }
}

// PUBLIC_INTERFACE
/**
 * Main App - Dashboard Shell for Micro Frontend Modules
 *
 * Provides:
 * - Top navbar to switch between modules (Assets, Explorer, Templates)
 * - Side menu for dashboard host features
 * - Content area dynamically mounting the selected module
 * - Theme toggle (light/dark)
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [activeModule, setActiveModule] = useState('assets');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const handleSwitchModule = (moduleKey) => {
    setActiveModule(moduleKey);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary, #fff)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Top Navigation Bar */}
      <TopNavBar
        current={activeModule}
        onSwitch={handleSwitchModule}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {/* Shell Layout: Side Menu + Main Content */}
      <div
        style={{
          display: "flex",
          flex: 1,
          minHeight: 0
        }}
      >
        <SideMenu />
        <main
          style={{
            flex: 1,
            padding: 0,
            overflow: "auto",
            background: "var(--bg-primary, #fff)"
          }}
        >
          <ModuleDisplay active={activeModule} />
        </main>
      </div>
    </div>
  );
}

export default App;

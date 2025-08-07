import React, { useState } from 'react';
import './App.css';
import { AssetsApp } from './modules/assets';
import { ExplorerApp } from './modules/explorer';
import { TemplatesApp } from './modules/templates';

import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import { useTheme } from "./theme/ThemeContext";

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
        <div style={{ padding: "2rem" }}>
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
  // Theme context exposes mode and color palette
  const themeCtx = useTheme();
  const { theme, switchTheme, colors } = themeCtx;
  const [activeModule, setActiveModule] = useState('assets');

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
        color: "var(--text-primary, #282c34)",
        transition: "background .2s, color .2s",
      }}
    >
      {/* Fixed Top Navigation Bar */}
      <NavBar
        current={activeModule}
        onSwitch={handleSwitchModule}
        theme={theme}
        toggleTheme={switchTheme}
        colors={colors}
      />
      {/* Collapsible Side Menu */}
      <SideMenu colors={colors} />
      {/* Main Content (offset for nav & sidebar) */}
      <div
        className="dashboard-main-content"
        style={{
          marginLeft: 200,
          marginTop: 60,
          padding: 0,
          minHeight: "calc(100vh - 60px)",
          transition: "margin-left .25s cubic-bezier(.4,0,.2,1)",
          position: "relative",
          overflow: "auto",
          background: "var(--bg-primary, #fff)",
          color: "var(--text-primary, #282c34)"
        }}
      >
        <ModuleDisplay active={activeModule} />
      </div>
    </div>
  );
}

export default App;

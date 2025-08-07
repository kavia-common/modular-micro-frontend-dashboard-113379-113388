import React, { useState, useEffect } from 'react';
import './App.css';

// Top Navigation Bar Component
// PUBLIC_INTERFACE
function TopNavBar({ activeModule, onModuleChange }) {
  /**
   * Renders the fixed top navigation bar with micro frontend module switch.
   * @param {string} activeModule - currently active micro frontend identifier.
   * @param {function} onModuleChange - function to switch micro frontend.
   */
  const modules = [
    { key: 'assets', label: 'Assets' },
    { key: 'explorer', label: 'Explorer' },
    { key: 'templates', label: 'Templates' },
  ];

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-title">MCS Dashboard</div>
      <div className="dashboard-menu">
        {modules.map((mod) => (
          <button
            key={mod.key}
            className={`dashboard-menu-btn${activeModule === mod.key ? ' active' : ''}`}
            onClick={() => onModuleChange(mod.key)}
          >
            {mod.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// Collapsible Sidebar Component
// PUBLIC_INTERFACE
function SideBar({ collapsed, onCollapse }) {
  /**
   * Sidebar for host-specific features. Collapsible.
   */
  return (
    <aside className={`dashboard-sidebar${collapsed ? ' collapsed' : ''}`}>
      <button
        className="sidebar-collapse-btn"
        onClick={onCollapse}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? '➡' : '⬅'}
      </button>
      {!collapsed && (
        <ul className="sidebar-menu">
          <li><span className="sidebar-menu-item">Dashboard Home</span></li>
          <li><span className="sidebar-menu-item">Reports</span></li>
          <li><span className="sidebar-menu-item">Settings</span></li>
          <li className="sidebar-spacer"></li>
          <li>
            <span className="sidebar-menu-item accent">Custom Action</span>
          </li>
        </ul>
      )}
    </aside>
  );
}

// PUBLIC_INTERFACE
function App() {
  /**
   * Dashboard host shell layout: top nav, collapsible sidebar, content.
   * Handles responsive layout and active module switching.
   */
  const [theme] = useState('light'); // Could use theme toggle in future
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState('assets'); // default module

  // Responsive handling on sidebar for mobile
  useEffect(() => {
    // Optionally, auto-collapse sidebar on window resize/mobile
    const mq = window.matchMedia('(max-width: 800px)');
    const handleResize = (e) => setSidebarCollapsed(e.matches);
    mq.addEventListener('change', handleResize);
    if (mq.matches) setSidebarCollapsed(true);
    return () => mq.removeEventListener('change', handleResize);
  }, []);

  // Placeholder content for federated modules
  // Later replace with remote component loading via Module Federation
  const moduleContent = {
    assets: (
      <div className="remote-placeholder">
        <h2>Assets Micro Frontend (placeholder)</h2>
        <p>This area will load the <strong>Assets</strong> micro frontend via Module Federation.</p>
      </div>
    ),
    explorer: (
      <div className="remote-placeholder">
        <h2>Explorer Micro Frontend (placeholder)</h2>
        <p>This area will load the <strong>Explorer</strong> micro frontend via Module Federation.</p>
      </div>
    ),
    templates: (
      <div className="remote-placeholder">
        <h2>Templates Micro Frontend (placeholder)</h2>
        <p>This area will load the <strong>Templates</strong> micro frontend via Module Federation.</p>
      </div>
    ),
  };

  return (
    <div className="dashboard-root" data-theme={theme}>
      <TopNavBar activeModule={activeModule} onModuleChange={setActiveModule} />
      <div className="dashboard-main-layout">
        <SideBar
          collapsed={sidebarCollapsed}
          onCollapse={() => setSidebarCollapsed(c => !c)}
        />
        <main className="dashboard-content">
          {moduleContent[activeModule]}
        </main>
      </div>
    </div>
  );
}

export default App;

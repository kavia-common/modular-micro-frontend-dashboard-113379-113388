import React from "react";

/**
 * PUBLIC_INTERFACE
 * NavBar - fixed top navigation for module switching and theme toggle.
 *
 * @param {string} current - Currently selected module key.
 * @param {function} onSwitch - Callback to switch between modules.
 * @param {string} theme - Current theme mode ('light'|'dark').
 * @param {function} toggleTheme - Callback to toggle theme.
 */
export default function NavBar({ current, onSwitch, theme, toggleTheme }) {
  const NAV_OPTIONS = [
    { key: "assets", label: "Assets" },
    { key: "explorer", label: "Explorer" },
    { key: "templates", label: "Templates" },
  ];
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
        justifyContent: "space-between",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 110,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontWeight: 700,
            color: "var(--kavia-orange, #E87A41)",
            fontSize: 22,
            marginRight: "2rem",
            letterSpacing: "0.5px"
          }}
        >
          🧩 MCS Dashboard
        </span>
        {NAV_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            aria-current={current === opt.key}
            className="btn"
            style={{
              background: current === opt.key ? "var(--kavia-orange, #E87A41)" : "transparent",
              color: current === opt.key ? "var(--text-color, #fff)" : "var(--text-primary, #282c34)",
              border: "none",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 6,
              margin: "0 0.5rem",
              padding: "0.5rem 1.1rem",
              cursor: current === opt.key ? "default" : "pointer",
              opacity: current === opt.key ? 1 : 0.9,
              outline: current === opt.key ? "2px solid var(--border-color,#e9ecef)" : "none",
              transition: "background .2s, color .2s"
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
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        style={{
          marginLeft: 16
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}

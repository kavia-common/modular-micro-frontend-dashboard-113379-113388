import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * SideMenu - Responsive collapsible side navigation for dashboard host actions.
 *
 * @param {boolean} [defaultCollapsed=false] - Start menu collapsed or not.
 * @param {object} colors - Optional: { primary, secondary, accent } brand colors.
 */
export default function SideMenu({ defaultCollapsed = false, colors }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const menuWidth = collapsed ? 64 : 200;

  return (
    <aside
      className="sidebar"
      style={{
        width: menuWidth,
        minWidth: collapsed ? 48 : 144,
        maxWidth: 260,
        background: "var(--bg-secondary, #f8f9fa)",
        borderRight: "1px solid var(--border-color, #e9ecef)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: collapsed ? "center" : "flex-start",
        paddingTop: 72, // offset for top navbar height
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        transition: "width 0.25s cubic-bezier(.4,0,.2,1)"
      }}
    >
      <button
        onClick={() => setCollapsed((cur) => !cur)}
        aria-label={collapsed ? "Expand menu" : "Collapse menu"}
        style={{
          background: "none",
          color: "var(--accent, var(--kavia-orange, #E87A41))",
          border: "none",
          fontSize: 20,
          margin: collapsed ? "0.7rem 0" : "0.7rem 1.1rem",
          cursor: "pointer",
          alignSelf: collapsed ? "center" : "flex-end",
          transition: "color .2s"
        }}
      >
        {collapsed ? "›" : "‹"}
      </button>
      <div
        style={{
          fontWeight: 600,
          color: "var(--accent, var(--kavia-orange, #E87A41))",
          marginBottom: 10,
          fontSize: 16,
          marginLeft: collapsed ? 0 : 20,
          textAlign: "center",
          width: "100%",
          transition: "opacity .15s"
        }}
      >
        {!collapsed && <>🛠 Host Menu</>}
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: 15,
          marginLeft: collapsed ? 0 : 20,
          color: "var(--text-primary, #282c34)",
          opacity: collapsed ? 0 : 1,
          transition: "opacity .15s"
        }}
      >
        <li style={{ margin: "1rem 0", opacity: 0.7 }}>
          <em>...add host actions...</em>
        </li>
      </ul>
    </aside>
  );
}

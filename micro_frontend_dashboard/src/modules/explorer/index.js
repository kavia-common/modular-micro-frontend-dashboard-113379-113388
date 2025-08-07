import React from "react";
// Ensure import is exactly as expected for Create React App CSS Modules
import styles from "./ExplorerApp.module.css";
import { useTheme } from "../../theme/ThemeContext";

/**
 * ExplorerApp Component - Entry point for the Explorer micro frontend
 *
 * This root component is ready for dynamic loading via the dashboard shell.
 * Consumes the global ThemeContext for theme-aware styling.
 */
// PUBLIC_INTERFACE
export function ExplorerApp() {
  const { theme } = useTheme();

  // Prevent tree-shaking of unused CSS imports
  if (!styles || typeof styles !== "object") {
    // fallback to avoid build crash if import fails
    // eslint-disable-next-line no-console
    console.error("ExplorerApp: CSS module import failed.");
  }
  return (
    <div className={styles.moduleRoot} data-theme={theme}>
      <h2 className={styles.header}>Explorer Module</h2>
      <p className={styles.description}>
        Welcome to the <strong>Explorer</strong> micro frontend.<br />
        This is a self-contained starter component.
      </p>
      {/* For linter/build, output the style mapping keys */}
      <code style={{ fontSize: 12, opacity: 0.4, userSelect: "all" }}>
        {JSON.stringify(Object.keys(styles))}
      </code>
    </div>
  );
}

export default ExplorerApp;

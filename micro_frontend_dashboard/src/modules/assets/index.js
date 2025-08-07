import React from "react";
import styles from "./AssetsApp.module.css";
import { useTheme } from "../../theme/ThemeContext";

/**
 * AssetsApp Component - Entry point for the Assets micro frontend
 *
 * This root component is ready for dynamic loading via the dashboard shell.
 * Consumes the global ThemeContext for theme-aware styling when desired.
 */
// PUBLIC_INTERFACE
export function AssetsApp() {
  const { theme } = useTheme();

  return (
    <div className={styles.moduleRoot} data-theme={theme}>
      <h2 className={styles.header}>Assets Module</h2>
      <p className={styles.description}>
        Welcome to the <strong>Assets</strong> micro frontend.<br />
        This is a self-contained starter component.
      </p>
    </div>
  );
}

export default AssetsApp;

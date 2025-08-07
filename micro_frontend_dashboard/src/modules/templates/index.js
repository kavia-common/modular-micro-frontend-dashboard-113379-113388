import React from "react";
import styles from "./TemplatesApp.module.css";

/**
 * TemplatesApp Component - Entry point for the Templates micro frontend
 *
 * This root component is ready for dynamic loading via the dashboard shell.
 */
// PUBLIC_INTERFACE
export function TemplatesApp() {
  /**
   * Main Templates micro frontend component.
   * Replace this placeholder with the real template UI.
   */
  return (
    <div className={styles.moduleRoot}>
      <h2 className={styles.header}>Templates Module</h2>
      <p className={styles.description}>
        Welcome to the <strong>Templates</strong> micro frontend.<br />
        This is a self-contained starter component.
      </p>
    </div>
  );
}

export default TemplatesApp;

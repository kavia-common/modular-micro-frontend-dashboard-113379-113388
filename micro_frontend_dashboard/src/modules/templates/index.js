import React from "react";
import styles from "./TemplatesApp.module.css";
import { useTheme } from "../../theme/ThemeContext";

/**
 * TemplatesApp Component - Entry point for the Templates micro frontend
 *
 * This root component is ready for dynamic loading via the dashboard shell.
 * Consumes the global ThemeContext for future extensions.
 */
// PUBLIC_INTERFACE
export function TemplatesApp() {
  const { theme } = useTheme();

  return (
    <div className={styles.moduleRoot} data-theme={theme}>
      <h2 className={styles.header}>Templates Module</h2>
      <p className={styles.description}>
        Welcome to the <strong>Templates</strong> micro frontend.<br />
        This is a self-contained starter component.
      </p>
    </div>
  );
}

export default TemplatesApp;

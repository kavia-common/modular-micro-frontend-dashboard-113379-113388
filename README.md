# Modular Micro Frontend Dashboard

---

## Overview

This project implements an extensible micro frontend dashboard (`MCS Dashboard`) in React.  
It supports dynamic remote loading of independent modules for *Assets*, *Explorer*, and *Templates*, following best practices for modular architectures, code quality, and developer experience.

- **Dashboard Host**: Central UI shell (React) with navigation, side menu, and themed content area
- **Micro Frontend Modules**: Each module (assets/explorer/templates) is independently deployable and imported dynamically
- **Modern UI/Theming**: Centralized color palette, light/dark mode, and CSS variable-based design
- **Code Quality**: Automated linting (ESLint), static analysis (SonarQube), and coverage support
- **Designed for Maintenance & Extensibility**

---

## Project Setup

1. **Install dependencies**

   ```sh
   cd micro_frontend_dashboard
   npm install
   ```

2. **Run in development mode**

   ```sh
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run tests**

   ```sh
   npm test
   ```

4. **Check lint/code quality**

   ```sh
   npm run lint
   ```

5. **Build for production**

   ```sh
   npm run build
   ```

---

## Developer Workflow

- __Development__:  
  Use `npm start` for hot-reloading local development.
- __Testing__:  
  Add unit/integration tests to `src/` and run via `npm test`.
- __Linting__:  
  Enforced by `npm run lint`. Code will NOT pass CI if lint errors exist.
- __Code Quality__:  
  Analyze code with SonarQube (`npx sonar-scanner`).

__Scripts Defined in `package.json`__:

| Script    | Purpose                                      |
|-----------|----------------------------------------------|
| start     | Start in development mode                    |
| build     | Bundles app for production                   |
| test      | Runs all tests with Jest/RTL                 |
| lint      | Runs ESLint with zero max warnings           |
| eject     | (CRA default) Ejects config (irreversible)   |

---

## File/Folder Structure & Modularity

    micro_frontend_dashboard/
    │
    ├── src/
    │   ├── App.js, App.css       # Main dashboard shell
    │   ├── index.js              # Entrypoint, wraps with ThemeProvider
    │   ├── theme/                # ThemeContext.js (provides theme/colors)
    │   ├── components/           # Shared: NavBar.jsx, SideMenu.jsx
    │   └── modules/              # All micro frontend modules below
    │       ├── assets/
    │       ├── explorer/
    │       └── templates/
    │
    ├── package.json, eslint.config.mjs
    ├── sonar-project.properties
    └── README.md

### Modules

- All micro frontend modules are in `src/modules/`
- Each module (**assets**, **explorer**, **templates**) exports a React root in its `index.js`
- Styles: Each module uses its own CSS module for isolation, e.g., `TemplatesApp.module.css`
- Add new modules by creating a subdir under `modules/`, exporting a React component, and wiring to `App.js`.

```js
// Example: src/modules/newmod/index.js
export function NewModApp() { /* ... */ }
```

Then add `"newmod"` to the top nav and switch-case in `App.js`.

---

## Dashboard UI & Theming

- **Theming** is centralized in `src/theme/ThemeContext.js` and `src/App.css`
    - Brand colors: `--kavia-primary`, `--accent`, etc.
    - Supports light/dark mode, toggled via top-right button (stored in localStorage)
    - All modules/components access colors via the context hook:
      ```js
      import { useTheme } from "../theme/ThemeContext";
      const { theme, colors } = useTheme();
      ```
    - To extend: edit the theme context or define more CSS color vars

- **Layout**
    - Top navigation bar: Module switching + theme toggle
    - Side menu: Collapsible, for dashboard host features
    - Main content: Loads selected micro frontend dynamically

- **Responsive Design**
    - Adaptive for desktop, tablet, and mobile: see `App.css` for detailed breakpoints

---

## Code Quality & Linting

- **ESLint**
    - Config: `eslint.config.mjs` (strict: unused vars, import order, a11y rules)
    - Run anytime: `npm run lint`
    - Warnings are treated as errors in CI (`--max-warnings=0`)

- **SonarQube**
    - Config: `sonar-project.properties`
    - Customize `sonar.projectKey`, `sonar.organization`, `sonar.host.url`
    - Run locally with:
      ```sh
      npx sonar-scanner
      ```
    - See [SonarQube docs](https://docs.sonarqube.org/latest/) for more details

- **Testing**:  
  - Uses Jest/React Testing Library (`npm test`)
  - Coverage reporting is supported (can be wired to SonarQube)

---

## Micro Frontend Architecture

- Modules are designed to be dynamically mountable
- The host dashboard holds UI shell, module registry, and theme context
- (Future: Module Federation / dynamic remote loading is supported by design, see comments inside `modules/README.md`)

---

## Extending and Maintaining

- **To add a new module**:
    1. Create a folder in `src/modules/newmodule`
    2. Export a React root in `index.js`
    3. Import and register in `App.js` (switch logic and nav)
    4. Provide a CSS module if needed for styles

- **To update the dashboard host**:
    - Edit components in `src/components/` for nav/menu
    - Refactor layout/settings in `App.js` and apply or extend theming
    - Update theme/colors via `src/theme/ThemeContext.js` and CSS variables in `App.css`

- **Best Practices**:
    - All new code must pass lint (`npm run lint`) and quality (`npx sonar-scanner`)
    - Keep modules decoupled—avoid cross-imports unless necessary
    - Share global state only via context providers
    - Always add/maintain root README and module folder READMEs as examples for future devs

---

## Further Resources

- [React documentation](https://reactjs.org/)
- [Micro-frontend architectures guide](https://martinfowler.com/articles/micro-frontends.html)
- [SonarQube Docs](https://docs.sonarqube.org/latest/)

---

## Contacts / Contribution

- If contributing, open issues or PRs on the repo and ensure all new modules follow the [modules/README.md](micro_frontend_dashboard/src/modules/README.md) conventions.
- For architectural/design/code quality questions, consult the top-level README and (if present) the `docs/` folder.

---

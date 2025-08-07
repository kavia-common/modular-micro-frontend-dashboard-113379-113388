# Micro Frontend Dashboard Host Shell

This folder contains the standalone **Dashboard Host Shell** React application. It serves as the entry point for the modular MCS dashboard and handles dynamic loading of the "assets", "explorer", and "templates" remote micro frontends.

## Features

- Independent React application scaffold—the host for federated remote modules.
- Manages navigation, layout, and UI shell for all micro frontend modules.
- Designed for modular, independent development and deployment.
- Modern, responsive UI (light/dark theme toggle ready).
- Ready for integration with SonarQube, custom linting, and modular code quality tooling.

## Getting Started

1. Install dependencies:

   ```sh
   cd micro_frontend_dashboard
   npm install
   ```

2. Start the development server:

   ```sh
   npm start
   ```

3. Build for production:

   ```sh
   npm run build
   ```

## Directory Structure

- `src/` - React app source code
- `public/` - Static assets (`index.html`, `favicon.ico`, manifest)
- `package.json` - Project configuration
- `eslint.config.mjs` - ESLint project config

## Notes

- This is **not** a submodule. It runs and builds independently as the host for all micro frontends.
- Federation and cross-app configuration are set up at later steps (see main project docs).
- For more, see `/README.md` at the project root.

---

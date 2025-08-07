# Templates Micro Frontend

This folder contains the standalone **Templates micro frontend** React application.

## Features

- Independent React application scaffold (no shared node_modules at the root)
- Designed to be federated into the dashboard host using **Webpack Module Federation**
- Supports local development and independent builds

## Getting Started

1. Install dependencies:

   ```sh
   cd templates
   npm install
   ```

2. Start the development server (runs at [http://localhost:3003](http://localhost:3003)):

   ```sh
   npm start
   ```

3. Build for production:

   ```sh
   npm run build
   ```

## Module Federation

- Uses **Webpack** and a custom `webpack.config.js` for all build/dev scripts.
- Exposes the main `App` component as `templates/App` via Module Federation for remote consumption.
- Remote entry available at: `http://localhost:3003/remoteEntry.js`
- Shared dependencies: React and ReactDOM are enforced as singletons.

## Notes

- No longer uses `react-scripts` (CRA) - all commands route through webpack and Babel.
- Federation is accomplished with webpack's `ModuleFederationPlugin` - see `webpack.config.js`.
- Babel (`@babel/core`, `@babel/preset-env`, `@babel/preset-react`) and Webpack loader dependencies are required for builds.
- This is **not** a submodule; it runs and builds independently.

---

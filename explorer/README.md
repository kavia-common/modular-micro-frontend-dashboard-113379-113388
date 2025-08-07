# Explorer Micro Frontend

This folder contains the standalone **Explorer micro frontend** React application.

## Features

- Independent React application scaffold (no shared node_modules at the root)
- Designed to be federated into the dashboard host
- Supports local development and independent builds

## Getting Started

1. Install dependencies:

   ```sh
   cd explorer
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

## Notes

- This is NOT a submodule; it runs and builds independently.
- Federation and shared config (if any) will be set up at a later stage.

---

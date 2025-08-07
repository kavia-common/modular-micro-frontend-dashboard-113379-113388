# Modules Directory

This folder houses micro frontend modules for the dashboard host app.  
Each subfolder represents a micro frontend application.

## Structure
- `assets/` - Assets micro frontend (e.g., asset management UI)
- `explorer/` - Explorer micro frontend (e.g., file/navigator interface)
- `templates/` - Templates micro frontend (e.g., template gallery or editor)

Each directory should export an entry index.js file with a root React component.

## Usage
Modules here are intended to be mounted dynamically by the dashboard host app.

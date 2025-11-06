# Development Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Git

## Initial Setup

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run in development mode
npm run dev
```

## Project Structure

```
little-professor-app/
├── src/
│   ├── main/          # Electron main process
│   │   ├── main.ts    # Main entry point
│   │   └── preload.ts # Preload script
│   ├── renderer/      # Renderer process (UI)
│   │   └── index.html # Main HTML file
│   └── shared/        # Shared code
│       └── math.ts    # Math problem generation
├── dist/              # Compiled output
├── .github/           # GitHub workflows and templates
└── package.json       # Project configuration
```

## Development Workflow

1. Make changes to TypeScript files in `src/`
2. Run `npm run build` to compile TypeScript
3. Run `npm run dev` to test the app
4. Commit and push changes

## Building for Production

```bash
# Build for Windows
npm run build:win

# Build for macOS
npm run build:mac

# Build for all platforms
npm run build
```

## Testing

Tests will be configured as development progresses.


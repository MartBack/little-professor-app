# Little Professor App

Educational math practice app inspired by the classic Little Professor toy from the 1970s.

## Features

- 🧮 Math problem generation (addition, subtraction, multiplication, division)
- 📊 Score tracking and performance metrics
- 🎯 Three difficulty levels (Easy, Medium, Hard)
- 🎲 Mixed operation mode or specific operation practice
- ⌨️ Numeric keypad and keyboard input support
- ✅ Immediate feedback on answers
- 🎨 Modern, responsive UI

## Platform Support

- ✅ Windows x64
- ✅ Windows ARM64
- ✅ macOS (Intel + Apple Silicon)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/MartBack/little-professor-app.git
cd little-professor-app

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Building Installers

```bash
# Build Windows installer (x64 + ARM64)
npm run build:win

# Build macOS installer (requires macOS)
npm run build:mac

# Build for all platforms
npm run build
```

Installers will be created in the `dist-installer/` directory.

## Development

### Project Structure

```
little-professor-app/
├── src/
│   ├── main/          # Electron main process
│   │   ├── main.ts    # Main entry point
│   │   └── preload.ts # Preload script
│   ├── renderer/      # UI (HTML, CSS, TypeScript)
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── game.ts    # Game logic
│   └── shared/        # Shared utilities
│       └── math.ts    # Math problem generation
├── dist/              # Compiled TypeScript output
└── package.json
```

### Available Scripts

- `npm run dev` - Run in development mode
- `npm run compile` - Compile TypeScript to JavaScript
- `npm run type-check` - Type check without compilation
- `npm run build:win` - Build Windows installer
- `npm run build:mac` - Build macOS installer
- `npm run build` - Build for all platforms

## Technology Stack

- **Framework:** Electron 39.1.0
- **Language:** TypeScript 5.9.3
- **Frontend:** HTML5, CSS3, TypeScript
- **Build Tool:** electron-builder 26.0.12

## Documentation

- [PROJECT_STATUS.md](PROJECT_STATUS.md) - Detailed project status and progress
- [TESTING.md](TESTING.md) - Comprehensive testing guide
- [DEVELOPMENT.md](DEVELOPMENT.md) - Development setup guide

## Testing

See [TESTING.md](TESTING.md) for detailed testing procedures and test cases.

## License

ISC

## Contributing

This is a learning project. Feel free to explore the code and learn from it!

---

*Last Updated: 2025-11-06*

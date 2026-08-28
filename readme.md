# FileBot

FileBot is a beginner-friendly Node.js automation tool that organizes files into folders based on their file type.

## Features

- Organizes common file types automatically
- Creates category folders when needed
- Supports a custom target directory
- Includes a command-line interface
- Includes automated tests
- Uses a simple Node.js project structure

## Requirements

- Node.js 18 or newer
- npm

## Installation

```bash
npm install
```

## Usage

Run FileBot against the Downloads folder:

```bash
npm start
```

Or provide a custom directory:

```bash
npm start -- "C:\\Users\\YourName\\Downloads"
```

## Categories

FileBot can organize files into categories such as:

- Images
- Videos
- Audio
- Documents
- Spreadsheets
- Archives
- Programs
- Other

## Development

Run the test suite with:

```bash
npm test
```

## Project Goal

This project is designed as a practical JavaScript/Node.js learning project. It demonstrates filesystem automation, modules, command-line arguments, error handling, and testing.

## License

MIT

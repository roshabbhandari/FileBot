# 🤖 FileBot

FileBot is a beginner-friendly **Node.js file organization automation tool**.

It automatically sorts files into folders based on their extensions, helping keep folders such as Downloads clean and organized.

## ✨ Features

- 📁 Automatically organize files by type
- 🖼️ Images support
- 🎬 Videos support
- 🎵 Audio support
- 📄 Documents support
- 📊 Spreadsheet support
- 📦 Archive support
- 💻 Program support
- 🔧 Custom directory support
- 🧪 Automated tests
- 🖥️ Simple command-line interface

## 📂 Example

Before:

```text
Downloads/
├── photo.jpg
├── movie.mp4
├── song.mp3
├── notes.pdf
└── archive.zip
```

After running FileBot:

```text
Downloads/
├── Images/
│   └── photo.jpg
├── Videos/
│   └── movie.mp4
├── Audio/
│   └── song.mp3
├── Documents/
│   └── notes.pdf
└── Archives/
    └── archive.zip
```

## 🚀 Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run

Use the default Downloads directory:

```bash
npm start
```

Or specify a custom directory:

```bash
npm start -- "C:\\Users\\YourName\\Downloads"
```

## 🧪 Test

Run the automated tests with:

```bash
npm test
```

## 🛠️ Built With

- JavaScript
- Node.js
- Node.js File System API
- Node.js Path API
- Node.js Test Runner

## 🎯 Learning Goals

FileBot is designed as a practical learning project for understanding:

- JavaScript modules
- Node.js
- File system automation
- Functions and loops
- Command-line arguments
- Error handling
- Testing
- Git and GitHub workflow

## 🔮 Future Ideas

- Watch a folder continuously
- Dry-run mode
- Custom category configuration
- Duplicate filename handling
- Detailed activity logs
- Interactive terminal menu
- Scheduled organization

## 📜 License

This project is licensed under the MIT License.

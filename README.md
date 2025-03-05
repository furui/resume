# Resume Generator

A simple Node.js application that converts your resume from Markdown to HTML and helps you generate a PDF version.

## Features

- Converts Markdown resume to HTML using a customizable template
- Local server for live preview
- Easy PDF generation through browser print function
- Simple and lightweight

## Prerequisites

- Node.js installed on your system
- A modern web browser (Chrome recommended for PDF generation)

## Installation

1. Clone this repository or download the files
2. Install dependencies:
```bash
npm install
```

## Usage

1. Edit your resume in `resume.md` using Markdown syntax
2. Start the local server:
```bash
npm run generate
```
3. View your resume at http://localhost:3000
4. To generate a PDF:
   - Open the page in Chrome
   - Press Cmd+P (Mac) or Ctrl+P (Windows)
   - Select "Save as PDF"
   - Click Save

## Project Structure

- `generate.js` - The Node.js server script
- `resume.md` - Your resume content in Markdown format
- `template.html` - HTML template for rendering the resume
- `package.json` - Project configuration and dependencies

## Customization

- Modify `template.html` to change the resume layout and styling
- Edit `resume.md` to update your resume content
- Adjust `generate.js` if you need to modify the server configuration or port

## License

This project is open source and available under the MIT License.
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './template.html';
    } else if (filePath.startsWith('./node_modules/')) {
        // Allow access to node_modules for client-side dependencies
        filePath = '.' + req.url;
    }

    const extname = path.extname(filePath);
    const contentType = {
        '.html': 'text/html',
        '.md': 'text/markdown',
        '.css': 'text/css',
        '.js': 'text/javascript'
    }[extname] || 'text/plain';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`View your resume at http://localhost:${port}/`);
    console.log('To generate PDF: Open the page in Chrome and use Print (Cmd+P) > Save as PDF');
});
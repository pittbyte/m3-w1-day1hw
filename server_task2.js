const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        // Serve the index.html file when /home is requested
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        // Serve the about.html file when /about is requested
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/contact') {
        // Serve the contact.html file when /contact is requested
        fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Respond with "Invalid Request!" for unmatched URLs
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }
});

server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
  });
  
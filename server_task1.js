const http = require('http');
const url = require('url');

const port = 5000;

// handle HTTP requests
const server = http.createServer((req, res) => {
  // Parse the requested URL
  const parsedUrl = url.parse(req.url, true);

  //  from the URL
  const pathname = parsedUrl.pathname;

  // Check the pathname and send different responses 
  if (pathname === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home Page.');
  } else if (pathname === '/about') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page.');
  } else if (pathname === '/contact') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Contact Page.');
  } else {
    // If no matches, respond with "Invalid Request!"
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request!');
  }
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`The NodeJS server on port ${port} is now running...`);
});

//  Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});
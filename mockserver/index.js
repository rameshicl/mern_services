const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'data.json');

  console.log("hello:",filePath);

  fs.readFile(filePath, 'utf8', (err, jsonData) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
    const data = JSON.parse(jsonData);
    if (req.url === '/users') {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data.users));
    } else if (req.url === '/products') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data.products));
    } else if (req.url === '/orders') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data.orders));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});

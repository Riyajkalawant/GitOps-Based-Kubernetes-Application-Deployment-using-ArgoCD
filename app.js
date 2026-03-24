const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.end("GitOps App v1 ");
}).listen(port);
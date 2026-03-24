const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.end("GitOps App v2
          auto sync");
}).listen(port);

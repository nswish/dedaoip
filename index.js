const http = require('http');

http.createServer((req, res)=>{
  res.status = 200;
  res.end(req.connection.remoteAddress);
}).listen(2000, '0.0.0.0')

console.log('server is running at 0.0.0.0:2000');

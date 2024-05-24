// create a server running on port 80 showing hello world
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(80, () => {
  console.log("Server is running on port 80");
});

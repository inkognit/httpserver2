const http = require("http");

const port = 3330;
const host = "localhost";

const listeningServer = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("my server");
});
listeningServer.listen(port, host,() => {
    console.log(`🚀🚀🚀 \nServer is running on http://${host}:${port}`);
});

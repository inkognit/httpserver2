const http = require("http");
const fs = require("fs").promises;

let indexFile;
const port = 3330;
const host = "localhost";

const listeningServer = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
});
fs.readFile("/home/michael/q/httpserver/routing/pages/mainPage.html")
  .then((contents) => {
    indexFile = contents;
    listeningServer.listen(port, host, () => {
      console.log(`🚀🚀🚀 \n Server is running on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    res.writeHead(500);
    res.end(err);
    return;
  });

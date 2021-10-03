const http = require("http");
const fs = require("fs").promises;

const port = 3330;
const host = "localhost";

const listeningServer = http.createServer((req, res) => {
   fs.readFile("/home/michael/q/httpserver/routing/pages/mainPage.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
      // res.end("contents");
            res.end(contents);
  
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
});

listeningServer.listen(port, host, () => {
  console.log(`🚀🚀🚀 \n Server is running on http://${host}:${port}`);
});

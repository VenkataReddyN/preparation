const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url === "/") {
    // do a 200 response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World!<h1>");
    res.end();
  }
  if (url === "/close") {
    process.send("STOP");
  }
});

server.listen(3000, function () {
  console.log("server started at port 3000");
});

process.on("STOP", function(){
  console.log("Exiting NodeJS server");
  server.close();
  //process.exit();
})

//Keep in mind that turning off a NodeJS server using process.exit() will interrupt all running 
//connections and terminate them.

//If you want to prevent the HTTP server from accepting new connections but still process all
// existing connections, you need to terminate your server by using the server.close() method.
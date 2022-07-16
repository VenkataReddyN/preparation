const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) => {
console.log("......Request & Response...............")
  res.statusCode = 200
  //First method
  //   fs.readFile("/home/venkat/Interview_Workspace/src/nodejs/11buffers.js", (err,data) => {
  //   if(err) {
  //       console.log(err)
  //       console.log("ERROR")
  //   }
  //   if(data) {
  //       res.end(data.toString())
  //   }
  //   })
  //res.end("<h1>...VENKAT...</h1>");

  //Second method
  const readStream = fs.createReadStream("/home/venkat/Interview_Workspace/src/nodejs/11buffers.js");
  readStream.on("data", (chunk) => {
    res.write(chunk)
  })
  readStream.on("end", () => {
     res.end(); 
  })
  readStream.on("error", (err) => {
    res.end("File not found error"); 
  })
});
server.listen(8000,"127.0.0.1", () => {
    console.log("Server started.....")
});
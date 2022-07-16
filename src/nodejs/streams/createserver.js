// const http = require("http")
 const https = require("https")
 const fs = require("fs")

// const server = http.createServer((req,res) => {
//     const readstream = fs.createReadStream(__dirname + "/streamsintroduction.txt")
//     //res.writeHead(200,{"Content-Type":"text/html"})
//     //res.write("<h1>WELCOME SIR</h1>")
//     //res.end()
//     readstream.pipe(res)
// })

// server.listen(3000, () => {
//     console.log(`Server listen at port 3000`)
// })


const express = require("express")
const app = express();
const options = {
    "hostname": "jsonplaceholder.typicode.com",
    "port": "",
    "path": "/todos",
    "method": "GET"
}
app.get("/", (req,res) => {
    //const readstream = fs.createReadStream(__dirname + "/streamsintroduction.txt")
    //readstream.pipe(res)
})
app.listen(3000, ()=>{
 console.log("server listen at 3000 port")
});
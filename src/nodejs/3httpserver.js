//https://www.w3schools.com/nodejs/nodejs_http.asp
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.statusCode = 200
  //res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
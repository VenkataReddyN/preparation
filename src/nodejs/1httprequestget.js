const https = require("https");
const options = {
    "hostname":"jsonplaceholder.typicode.com",
    "port":"",
    "path":"/todos",
    "method":"GET"
}
const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()


  fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

  (async () => {
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();
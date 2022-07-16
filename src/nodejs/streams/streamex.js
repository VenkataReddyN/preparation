const fs = require("fs");

const readstream = fs.createReadStream(__dirname + "/streamsintroduction.txt")
const writestream = fs.createWriteStream(__dirname + "/write.txt")
readstream.pipe(writestream)

//readerStream.setEncoding('UTF8');
// readstream.on("data", (chunk) => {
//     writestream.write(chunk)
//     console.log("CHUNK::",chunk)
// })
// readstream.on("end", () => {
//     console.log("END::")
// Mark the end of file
//    writerStream.end();
// })
// readstream.on("error", (error) => {
//     console.log("error::",error)
// })
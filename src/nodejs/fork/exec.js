const { exec } = require('child_process');

const ls = exec('ls -l', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
});


//Spawn
//When spawn is called, it creates a streaming interface between the parent and child process. Streaming Interface — one-time buffering of data in a binary format.

//Fork
//When fork is called, it creates a communication channel between the parent and child process Communication Channel — messaging

//Differences between Spawn and Fork
//While both sound very similar in the way they transfer data, there are some differences.

//Spawn is useful when you want to make a continuous data transfer in binary/encoding format — e.g. transferring a 1 Gigabyte video, image, or log file.
//Fork is useful when you want to send individual messages — e.g. JSON or XML data messages.
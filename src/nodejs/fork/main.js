// https://sebhastian.com/nodejs-fork/
// For CPU Intensive operations we use them.
//  Although NodeJS is a single-threaded JavaScript runtime, it can create multiple subprocesses 
//that run separately from each other, allowing you to divide and run your application script from
// different NodeJS instances.

//The child process will have its own memory and runtime instance, so you need to have additional 
//resources to allocate for each child process.
  
//The fork() method accepts the following three parameters:

//i.  A module path string for a JavaScript file to execute on the child process (required)
//ii. An array of string to pass as the child process arguments
//iii.The options object that you want to pass to the child process





let { fork } = require("child_process");

console.log("main process...")
console.log("fork starting..")
const child = fork("/home/venkat/Interview_Workspace/src/nodejs/fork/child.js")
//Passing arguments to fork() method child process
//const child = fork("child.js", [99, "Nathan"]);

child.send(29);

child.on("message", function (message) {
  console.log(`Message from child.js: ${message}`);
});

child.on("close", function (code) {
    console.log("child process exited with code " + code);
});
child.on("error", (err) => {
    // This will be called with err being an AbortError if the controller aborts
    console.log(err);
  });
controller.abort(); // Stops the child process
//fork() method communication channel
//The fork() method also establishes a communication channel between the main process and its 
//child process, allowing you to exchange information between the two processes.
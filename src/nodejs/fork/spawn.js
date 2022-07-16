var {spawn, exec} = require('child_process');
// Fork is a special instance of spawn, that runs a fresh instance of the V8 engine.
// 'node' is an executable command (can be executed without a shell) 
// uses streams to transfer data (spawn.stout)  
var spawn = spawn('node', ['module.js']);     
spawn.stdout.on('data', function(msg){         
    console.log(msg.toString())
});

    // the 'node module.js' runs in the spawned shell 
    // transfered data is handled in the callback function 
var exec = exec('node module.js', function(err, stdout, stderr){
    console.log(stdout);
});


//Spawn is a command designed to run system commands. When you run spawn, you send it a system 
//command that will be run on its own process, but does not execute any further code within your 
//node process. You can add listeners for the process you have spawned, to allow your code interact
// with the spawned process, but no new V8 instance is created(unless of course your command is 
//another Node command, but in this case you should use fork!) and only one copy of your node module
// is active on the processor.

//spawn − child_process.spawn launches a new process with a given command.
//fork − The child_process.fork method is a special case of the spawn() to create child processes.
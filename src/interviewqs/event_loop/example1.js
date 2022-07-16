//https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/

//Phases Overview
//1.timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
//2.pending callbacks: executes I/O callbacks deferred to the next loop iteration.
//3.idle, prepare: only used internally.
//4.poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
//5.check: setImmediate() callbacks are invoked here.
//6.close callbacks: some close callbacks, e.g. socket.on('close', ...).

(async function mainline() {
    let axios = require("axios");
    Promise.resolve().then(rec => {
        console.log("PROMISE:::::::::::::::::::")
    })
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
        console.log("axios:::0000000000000")
        setTimeout(() => { console.log("set timeout ::::00000000") }, 2000)
        setImmediate(() => { console.log("set immediate ::::000000") })
        process.nextTick(()=>{
            console.log("next tick::: 00000000000")
        })
    })
   
    axios.get("https://jsonplaceholder.typicode.com/photos/1").then((res) => {
        console.log("axios:::111111111111")
        setTimeout(() => { console.log("set timeout ::::1111") }, 0)
        setImmediate(() => { console.log("set immediate ::::111111") })
    })

    // axios.get("https://jsonplaceholder.typicode.com/photos/2").then((res) => {
    //     console.log("axios:::2222222222222")
    //     setTimeout(() => { console.log("set timeout ::::2222222") }, 0)
    //     setImmediate(() => { console.log("set immediate ::::222222") })
    // })

    
    setImmediate(() => { console.log("set immediate ::::1111") })
    process.nextTick(() => { console.log("process next ticket..") });
    console.log("start");
    setImmediate(() => { console.log("set immediate ::::2222") })
    setTimeout(() => { 
         console.log("set timeout ::::22222")
         setTimeout(() => { console.log("set timeout ::::22222 0000000")}, 0)
         setImmediate(() => { console.log("set immediate ::::22222 0000000") })
         process.nextTick(()=>{
            console.log("next tick::: 22222 0000000")
        })
        Promise.resolve().then(rec => {
            console.log("PROMISE::: 22222 0000000")
        });
    }, 10000)
    console.log("end");
})()
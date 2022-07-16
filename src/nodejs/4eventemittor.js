const EventEmitter = require('events')
const eventEmitter = new EventEmitter()


eventEmitter.on('start', number => {
    console.log(`started ${number}`)
  })
eventEmitter.emit('start', 23)

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
  })
  
eventEmitter.emit('start', 1, 100)
  

//  The EventEmitter object also exposes several other methods to interact with events, like

//once(): add a one-time listener
//removeListener() / off(): remove an event listener from an event
//removeAllListeners(): remove all listeners for an event
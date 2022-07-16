//module wise exports
//Message.js
module.exports = 'Hello world';

//app.js
var msg = require('./Messages.js');
console.log(msg); //Hello world


//The exports is an object. So, you can attach properties or methods to it. The following example exposes an object with a string property in Message.js file.
exports.SimpleMessage = 'Hello world';
//or
module.exports.SimpleMessage = 'Hello world';


var msg = require('./Messages.js');
console.log(msg.SimpleMessage);


module.exports.log = function (msg) { 
    console.log(msg);
};

module.exports = {
    firstName: 'James',
    lastName: 'Bond'
}


var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);


module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}


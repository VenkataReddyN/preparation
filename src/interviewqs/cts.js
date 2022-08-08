//interceptors middleware
//logging, add new things to request before passing.
//change the response.
//add date and time etc.

//foreignkey and 
// A primary key is used to ensure data in the specific column is unique.
// A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables.
//Stored Procedures are created to perform one or more DML operations on Database. It is nothing but the group of SQL statements that accepts some 
//input in the form of parameters and performs some task and may or may not returns a value. 

//procedures and stored proceduers.

//json validations. JOI

//created npm module ?

//axios methods ? difference b/w post and put ?

//GET,POST,PUT,DELETE,PATCH(UPDATE PARTIAL COLUMNS)

//Create npm module
//1. Create an node application
//npm init
//package.json main:"index.js"
//index.js
module.exports = {
    add: function(a,b) {
        return a+b;
    },
    subtract: function(a,b) {
        return a-b;
    }
}
// signup in npm website. 
//>npm adduser
//>username:
//>password:
//npm publish

//npm i selfcal --save
//const add = require("selfcal");
//add.add(2,3)
//polyfills in nodejs
//send static data using routes.

//https://blog.risingstack.com/fundamental-node-js-design-patterns/

// src
//       ├── app.js			app entry point
//       ├── /api			controller layer: api routes
//       ├── /config			config settings, env variables
//       ├── /services		service layer: business logic
//       ├── /models			data access layer: database models	
//       ├── /scripts		miscellaneous NPM scripts
//       ├── /subscribers		async event handlers
//       └── /test               test suites
//https://www.programiz.com/javascript
//https://felixgerschau.com/javascript-memory-management/
console.log("Hello world");
//doubts
//What advantages are using arrow functions?



//Strict mode makes it easier to write "secure" JavaScript.
//Strict mode changes previously accepted "bad syntax" into real errors.
//As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
//In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
//In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
"use strict";
x = 3.14;   // This will cause an error


//console.log(y);  // Output: ReferenceError: y is not defined
var x; // declaring x
console.log(x); //output: undefined

function stringRev(String, separator) {
    // return String.split(separator).map(e => e.split("").reverse().join("")).join(" ");
    //  return string.replace(/is/g,"are")
     // return string.split(" ").filter(e => e==="is").length;
     // return string.indexOf("there"); //8
     // return string.lastIndexOf("there");
      return string.slice(-3)    }





 //Prevent extensions      
var a = {a:1}
var b = {b:1}
var c = Object.create(a)
Object.preventExtensions(c) 

//or 
var a = {a:1}
var c = Object.create(a)
Object.getPrototypeOf(c) //a
Object.freeze(c);
c.__proto__ = b;//throws error now
//Javed Nirgude12:11 PM
//Promise.all fail cases ??
[1, 2, 3, 4, 5]
[4, 5, 1, 2, 3]

/*
 let arr = [1,2,3,4,5]
 let k = 7;
 for(let i=0;i<k;i++){
   arr.push(arr.shift())
 }
*/

/*
let number = 0;
console.log(number++); 0
console.log(++number); 2
console.log(number); 2

function getAge(...args) {
  console.log(typeof args); //Object 
  console.log(args) //[21]
}
getAge(21);
*/

/*const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const seta = new Set([1, 2, 3, 4, 5]);

//obj.hasOwnProperty('1'); true
//obj.hasOwnProperty(1); true
//seta.has('1'); false
//seta.has(1); true */

/*
 Assuming the person getting the lesser amount is getting Rs. x
 x + (x+5) = 100
 2x = 95
 x = 47.5
 so, person-1 gets Rs. 47.5 and
 person-2 gets Rs. 52.5 (which is Rs. 5 more than what person-1 got)
*/
//If one of the Promises rejects, the Promise.all will reject with a value of the rejection, but Promise.allSettled will resolve with an object of { status: 'rejected', reason: <error> } at that place in the array.

/*
class Singleton {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    foo() {
        // ...
    }
}

let abc = new Singleton();
let edf = new Singleton();
if(abc === edf) {
  console.log("true")
} */

class SingleTon {
  constructor(){
    const instance = this.constructor.instance;
    if(!instance) {
      this.constructor.instance = this;
    }
  }
}

//All JavaScript objects inherit properties and methods from a prototype.
//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype
//The Object.prototype is on the top of the prototype inheritance chain:

//Date objects, Array objects, and Person objects inherit from Object.prototype.
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
//How exception handing doing?
let User = function(name,courses) {
  this.name = name;
  this.courses = courses;
  this.getCount = () => {
    console.log(`Total courses: ${this.courses.length}`)
  }
}

User.prototype.getName = function() {
  console.log(` user name is ${this.name}`)
}
let user = new User("venkat",["Javascript","Java"])
user.getCount();
user.getName()


const obj = {
  "glossary": {
    "title": "example glossary",
    "GlossDiv": {
      "title": "S",
      "GlossList": {
        "Gloss Entry": {
          "ID": "SGML",
          "GlossTerm": "Standard Generalized Markup Language",
          "GlossDef": {
            "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": [
              "GML",
              "XML"
            ]
          }
        }
      }
    }
  }
}

obj.glossary.GlossDiv.GlossList["Gloss Entry"].GlossDef.GlossSeeAlso[1]

//{[()]}

//event loop latest in node 14.16.0
//use of setImmediate
//Validation of jwt token
// how to throw error.
//Difference mysql and postgressql
//index or primary key.
//query optimization
//security diff b/w session and jwt token ?
//diff b/w lbs aws
//security code execution image and dist.

//difference between encoding encryption and hashing
//Encoding: Reversible transformation of data format, used to preserve usability of data.

//Hashing: Is a one-way summary of data, cannot be reversed, used to validate the integrity of data.

//Encryption: Secure encoding of data used to protect confidentiality of data.

//This refer to the object on which we call our function.

//A deep copying means that value of the new variable is disconnected from the original 
//variable while a shallow copy means that some values are still connected to the original
//variable.

//Shallow copy

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      country: 'USA'
  }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);

//Deep copy example

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      country: 'USA'
  }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';

console.log(person);


// https://www.youtube.com/watch?v=Qew1GY6sxdY&ab_channel=codeWithSimran

let obj = {
  name: "venkat",
  fun: () => {
    console.log(this.name)
    function fun2() {
      console.log(this.name);
    }
    let fun3 = () => {
      console.log(this.name);
    }
    fun2();
    fun3();
  }
}

  obj.fun();
  

let obj1 = {
  name: "venkat",
  fun: function () {
    console.log(this.name)
    function fun2() {
      console.log(this.name);
    }
    let fun3 = () => {
      console.log(this.name);
    }
    fun2(); //window.fun2() ===> Global object.
    fun3(); //window.fun3() ====> fun3 exists in obj1 so this points to same obj1
  }
}
 
//For arrow functions this refer to where the function exist.
//if we use arrow function inside object then this will refer same object.
//if we write arrow function directly then this will refer global object.

let part1 = {
  name: "venkat",
  battery: 30,
  updateBattery: function (a, b) {
    this.battery = this.battery + a + b;
  }
}

let part2 = { name: "jeshwith", battery: 20 }
//call method takes another object to invoke the function.
part1.updateBattery.call(part2, 20, 30);
console.log(part2)
//{name: "jeshwith", battery: 70}

//append and call are same except for append we need to pass array of data.
part1.updateBattery.apply(part2, [20, 30]);
console.log(part2)
//{name: "jeshwith", battery: 120}

//bind method returns another function which will call later..
const fun1 = part1.updateBattery.bind(part2, 20, 30);
fun1();
console.log(part2);
//{name: "jeshwith", battery: 170}

//var,let and const
if(true){
  let abc = "venkat"
  console.log(abc); //venkat
}
console.log(abc) //null

if(true){
  var abc = "venkat"
  console.log(abc); //venkat
}
console.log(abc) //venkat


for(let i = 0; i<5; i++) {

}
//if we use var it will print i value after for loop
//console.log(i) //error: Uncaught ReferenceError: i is not defined

//allows
var age = 1;
var age = 2;

//not allow
var abc = 1;
let abc =2; //The symbol "abc" has already been declared

//not allow
let d = 2;
var d = 2; //The symbol "d" has already been declared


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

//Function.prototype.apply()
//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);
// expected output: 7
const min = Math.min.apply(null, numbers);
console.log(min);
// expected output: 2
//===========================================================================================================================================
//Function.prototype.bind()
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.
const module = {
   x: 42,
   getX: function() {
     return this.x;
   }
};
  
const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined
  
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//================================================
function fullName() {
  return "Hello, this is " + this.first + " " + this.last;
}
  
console.log(fullName()); // => Hello this is undefined undefined
  
// create a person object and pass its values to the fullName function
var person = {first: "Foo", last: "Bar"};
console.log(fullName.bind(person)()); // => Hello this is Foo Bar

//============================================================================================================================================
//Function.prototype.call()
// The call() method calls a function with a given this value and arguments provided individually.
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"


//============================================================================================================================================
//Function.prototype.toString()
//The toString() method returns a string representing the source code of the function.
function sum(a, b) {
  return a + b;
}
  
console.log(sum.toString());
// expected output: "function sum(a, b) {
//                     return a + b;
//                   }"
  
console.log(Math.abs.toString());
// expected output: "function abs() { [native code] }"


// =========================================================================================================================================

// Both .call and .apply are used to invoke functions and the first parameter will be used as the value  this within the function. 
// However, .call takes in comma-separated arguments as the next argument while .apply taking in an array of arguments as the next argument. 
// An easy way to remember this is C for call comma-separated and A for apply an array of arguments.

function add(a, b) {
  return a + b;
}
  
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
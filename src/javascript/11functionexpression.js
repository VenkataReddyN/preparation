// The former is a function declaration while the latter is a function expression. The key difference is that function declaration have its body hoisted 
// but the bodies of function expressions are not (they have the same hoisting behavior as variables). If you try to invoke a function expression before it is defined, 
// you will get an Uncaught TypeError: XXX is not a function error.

//Function Declaration
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}

//Function Expression
foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log('FOOOOO');
};
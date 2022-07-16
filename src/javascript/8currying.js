// Currying is when you break down a function that takes multiple arguments into a series of functions that take part in the arguments. 
function add (a, b) {
    return a + b;
}

add(3, 4); // returns 7


function add (a) {
  return function (b) {
    return a + b;
  }
}
// Array destructuring

// Variable assignment.
const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

//Object destructuring

// Variable assignment.
const o = { p: 42, q: true };
const { p, q } = o;
console.log(p); // 42
console.log(q); // true

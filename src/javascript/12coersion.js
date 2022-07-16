// In JavaScript conversion between different two build-in types called coercion. Coercion comes in two forms in JavaScript: explicit and implicit.

// Here's an example of explicit coercion:

var a = "42";
var b = Number( a );
a;				// "42"
b;				// 42 -- the number!

// And here's an example of implicit coercion:
var a = "42";
var b = a * 1;	// "42" implicitly coerced to 42 here
a;	// "42"
b;	// 42 -- the number!

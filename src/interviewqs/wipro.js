//Danamic query parameters.
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// will be available in route in req.params object
router.get('/somepath/with/:variable', (req ,res) => {
    console.log(req.params.variable);
});

// will be available in route in req.query object
router.get('/somepath/with/variables?page=2&limit=3&sort=price', (req ,res) => {
    console.log(req.query.page);
    console.log(req.query.limit);
    console.log(req.query.sort);
});

//{{[]}}

https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/

// Javascript program for checking
// balanced brackets
 
// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{    
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
 
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        { 
         // Push the element in the stack
         stack.push(x);
         continue;
        }
 
        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    // Check Empty Stack
    return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");
 
// 
let abc = "abcade";
let finalstring = ""

for(let i of abc) {
  console.log(i)
 if(abc.lastIndexOf(i) != abc.indexOf(i)) {
   console.log("XXXXXXXXXXXXXXXx")
   let c = abc.slice(abc.indexOf(i),abc.lastIndexOf(i))
   finalstring = (c.length > finalstring.length)?c:finalstring
  } else {
   let c = abc.slice(abc.indexOf(i),abc.lastIndexOf(i))
    console.log(c)
   finalstring = (c.length > finalstring.length)?c:finalstring
  }
}
finalstring

//const app = express();

//function sample((req,res,next) => {
//    next();
//})

//app.get("/getlist/:id", sample, (req,res) => {
  
//})

let abc = "abcade";
let finalstring = ""

for(let i of abc) {
 if(abc.lastIndexOf(i) != abc.indexOf(i)) {
    let c = abc.slice(abc.indexOf(i),abc.lastIndexOf(i))
    finalstring = (finalstring.length > c.length) ? finalstring : c
 } else {
   let c = abc.slice(abc.indexOf(i))
   finalstring = (finalstring.length > c.length) ? finalstring : c
 }
}
//cluster in node js code.
// Hoisting is the concept in which Javascript, by default, moves all declarations to the top of the current scope. 
//As such, a variable can be used before it has
// been declared.

// Note that Javascript only hoists declarations and not initializations.


//JavaScript Hoisting refers to the process whereby the interpreter appears to move the 
//declaration of functions, variables or classes to the top of their scope, prior to execution
// of the code.

//Hoisting allows functions to be safely used in code before they are declared.

//Variable and class declarations are also hoisted, so they too can be referenced before 
//they are declared. Note that doing so can lead to unexpected errors, 
//and is not generally recommended.

console.log("NUMBER IS::::"+num);
//console.log("LET VARIABLE::::"+abc)
var num;
num = 10
//const abc = 20;


//let name = "venkat";
// const abc = (name) =>{
//     this.name = name;
//     let getname = function(){
//         return "HI  "+name;
//     }
//     return getname;
// }

// let res = abc("venkat");
// console.log(res())

// let user = {
//     name: "GFG",
//     gfg1:() => {
//         console.log("hello " + this.name); // no 'this' binding here
//     },
//     gfg2(){       
//         console.log("Welcome to " + this.name); // 'this' binding works here
//     }  
//  };
// user.gfg1();
// user.gfg2();

let prm = Promise.reject("Error");

prm.then(res => {
    console.log(res)
}, e => {
    console.log(`ERROR IS::: ${e}`)
})

// (async () => {
//     try {
//         const abc = await prm;
//         console.log(abc)
//     } catch (error) {
//         console.log(":::::::::::::::::ERROR:::::::::::::::::::")
//     }
// })()


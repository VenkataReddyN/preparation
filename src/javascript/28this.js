//This refers to the object on which we call our function.
//obj1.displayName();
//obj2.displayName();

//Global Object
/* function displayName(name) {
    console.log(name,this);
}

displayName("venkat"); or window.displayName("venkat") */
let name = "Jeshwith";

//venkat { name: 'venkat', displayName: [Function: displayName] }
/* let obj = {
    name:"venkat",
    displayName:function(name) {
        console.log(name,this);
    },
    fdisplay: (name) => {
        console.log(name,this)
    }
}

obj.displayName("venkat")
obj.fdisplay("Jeshwith") */

//Arrow functions
//Where were sayByea defined 
let obj = {
    "name":"Jeshwith",
    sayHello: function(params) {
        console.log(params,this)
        const sayBye = function(a) {
            console.log(a, this)
        }
        //{ name: 'Jeshwith', sayHello: [Function: sayHello] }
        const sayByea = (a) =>{
            console.log(a, this)
        }
        sayBye("Bye");
        sayByea("Bye");

    }
}

obj.sayHello("Venkat")
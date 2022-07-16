// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFunc(); // Promise resolved

console.log("AAA")

//====================================================================
// program to display a text using setInterval method
function greet() {
    console.log('Hello world');
}

setInterval(greet, 1000);

setTimeout(()=>{
    
})
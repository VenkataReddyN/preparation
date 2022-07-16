//In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

//A promise may have one of three states.

// Pending
// Fulfilled
// Rejected



// returns a promise

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
 countValue.then(function successValue(result) {
      console.log(result);
    })
  .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    })
    // executes if there is an error
  .catch(function errorValue(result) {
        console.log(result);
     });

   //=========================================================================================================================== 
   
  const promise1 = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
  // expected output: Array [3, 42, "foo"]

  //=======================================================================================
  //JavaScript Callback
  //The syntax is difficult to understand.
  //Error handling may be hard to manage.
  Example:
  
  api(function(result){
      api2(function(result2){
          api3(function(result3){
               // do work
              if(error) {
                // do something
              }
              else {
                // do something
              }
          });
      });
  });

  //======================================================================================
  // JavaScript Promise
  //The syntax is user-friendly and easy to read.
  //Error handling is easier to manage.
  //Example:

api().then(function(result) {
    return api2() ;
}).then(function(result2) {
    return api3();
}).then(function(result3) {
    // do work
}).catch(function(error) {
    //handle any error that may occur before this point 
});

//=====================================================================================

// JavaScript Promise Methods
// There are various methods available to the Promise object.

//Method	Description
//all(iterable)	Waits for all promises to be resolved or any one to be rejected
//allSettled(iterable)	Waits until all promises are either resolved or rejected
//any(iterable)	Returns the promise value as soon as any one of the promises is fulfilled
//race(iterable)	Wait until any of the promises is resolved or rejected
//reject(reason)	Returns a new Promise object that is rejected for the given reason
//resolve(value)	Returns a new Promise object that is resolved with the given value
//catch()	Appends the rejection handler callback
//then()	Appends the resolved handler callback
//finally()	Appends a handler to the promise



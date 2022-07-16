//for of always expects iterable
//for in accepts array and object also

let abc = [{"a":0,"b":1,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]
for(const a of abc) {
    console.log("of ", a);
}
// {"a":0,"b":1,"c":3}
// {"a":4,"b":5,"c":6}
// {"a":7,"b":8,"c":9}

for(const a in abc) {
    console.log("in "+a);
}

// 0,1,2,3
let data = {"a":0,"b":1,"c":3}
for(const a in data) {
    console.log(a)
}
//a,b,c

let samplearray = [1,2,3,4,5,6,7,8]

samplearray.forEach(rec => {
   console.log(rec); 
})


//For objects:

//for loops - for (var property in obj) { console.log(property); }. However, this will also iterate through its inherited properties, and you will add a 
//obj.hasOwnProperty(property) check before using it.

//Object.keys() - Object.keys(obj).forEach(function (property) { ... }). Object.keys() is a static method that will list all enumerable properties of the 
//object that you pass it.

//Object.getOwnPropertyNames() - Object.getOwnPropertyNames(obj).forEach(function (property) { ... }). Object.getOwnPropertyNames() is a static method that
// will list all enumerable and non-enumerable properties of the object that you pass it


//For arrays:

//for loops - for (var i = 0; i < arr.length; i++). The common pitfall here is that var is in the function scope and not the block scope and most of the time
// you would want a block-scoped iterator variable. ES2015 introduces let which has block scope and it is recommended to use that instead. 
//So this becomes: for (let i = 0; i < arr.length; i++).

//forEach - arr.forEach(function (el, index) { ... }). This construct can be more convenient at times because you do not have to use them index if all you 
//need is an array of elements. There are also the every and some methods that will allow you to terminate the iteration early.
// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const test = Array.from(new Set(array))
//console.log(test);


// ES5 Implementation
function checking(Array) {
 let abc = {}
 let result = [];
 for(let i of Array) {
     if(!abc.hasOwnProperty(i)) {
        console.log(i)
        abc[i] = 1
        result.push(i);
     }
    
 }
  console.log(result);
  //console.log(Object.keys(abc))
}
checking(array);


//const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return a - b});
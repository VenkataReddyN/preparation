/* let array = [1,2,3,4,5,6,7,8,9]
array.map(rec => rec*2) // [2,3,4,8,10,12,14,16,18]
array.filter(rec => rec%2 ==0 ) // [2,4,6,8]
array.reduce((num1,num2) => {
    return num1+num2;
})


//CUSTOM REDUCE FUNCTION
let mynumbers = [1,2,3,4,5,6,7,8,9]
const myreducer = (previousvalue, currentvalue) => previousvalue + currentvalue;

const reducemy = (myreducer,initialvalue,mynumbers) => {
  let value = initialvalue;
  for(let i=0; i<mynumbers.length; i++) {
    let currentvalue = mynumbers[i];
    value = myreducer(value,currentvalue)
  }
  return value;
}

reducemy(myreducer,0,mynumbers)

//===============OR========================
function reduce(callback, initialVal) {
    var accumulator = ( initialVal === undefined) ? this[0] : initialVal;
    var start = (initialVal === undefined) ? 1 : 0
    for (var i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;
  };

//Array.prototype.myReduce = reduce
// no init value
console.log([1, 2, 3].myReduce((sum, curr) => sum + curr))
// init value:
console.log([1, 2, 3].myReduce((sum, curr) => sum + curr, 1000))*/

function myReducer(callback, initailVal){
  let initVal = (initailVal === undefined) ? this[0] : initailVal;
  let start = (initVal === undefined) ? 0 : 1
  for (let i = start; i < this.length; i++) {
    initVal = callback(initVal,this[i])
  }
  return initVal;
}
Array.prototype.myReducer = myReducer;
console.log([1,2,3,4,5].myReducer((sum,curr) => sum + curr,1000))
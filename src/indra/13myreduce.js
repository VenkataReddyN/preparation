Array.prototype.myReduce = function(callback, accumlator) {
    let acc = accumlator || undefined;
    for (let i=0; i< this.length; i++) {
      if (!acc) {
        acc = this[i];
      } else {
        acc = callback(acc, this[i], this);
      }    
    }
    return acc;
  }
  
  res1 = array.myReduce((accumlator, value) => {
    return accumlator + value;
  });
  
  res2 = array.reduce((a, n) => {
     return a + n;
  });
  // console.log('reduce', res1, res2);

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
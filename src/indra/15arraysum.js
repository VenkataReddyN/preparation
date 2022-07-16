function sum (a) {
    return a.reduce((a, v) => {
      return a + v;
    }, 0);
  }
  
  console.log("sum", sum([1,2,3,4,5,6,7,8,9]))
  array2.reduce((a,b) => {
    return a+b;
  },0)
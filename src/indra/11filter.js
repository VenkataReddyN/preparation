Array.prototype.myFilter = function (callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        array.push(this[i]);
      }
    }
    return array;
  };
  
  res1 = array.myFilter((item) => {
    return item % 2 == 0;
  });
  
  res2 = array.filter((item) => {
     return item % 2 == 0;
  });
  // console.log('filter', res1, res2);
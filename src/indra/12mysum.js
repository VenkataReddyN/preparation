Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)){
        return true;
      }
    }
    return false;
  }
  
  res1 = array.mySome((item) => {
    return item % 11 === 0;
  });
  
  res2 = array.some((item) => {
     return item % 11 === 0;
  });
  // console.log('some', res1, res2);
  
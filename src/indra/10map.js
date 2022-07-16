Array.prototype.myMap = function (callback) {
    let array = [];
    for(let i = 0; i < this.length; i++) {
      console.log("DATA::: "+callback(this[i], i, this))
      array.push(callback(this[i], i, this));
    }
    return array;
  };
  let array = [1,2,3,4,5,6,7]
  let res1 = array.myMap((n) => {
      return n*10;
  });
  
  let res2 = array.map((n) => {
    return n*10;
  });

  console.log("res1",res1)
  
  // console.log(res1, res2);
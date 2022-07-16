function myFlat (array, depth) {
    if (depth > 0) {
      console.log(depth)
      return array.reduce((a, value) => {
        if (Array.isArray(value)) {
          return a.concat(myFlat(value, depth-1));
        } else {
          return a.concat(value)
        }
      }, []);
    } else {
      return array.slice();
    }
  }
  Array.prototype.myflat = function(depth=1) {
   return myFlat(this, depth);
  }
  
  const array2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [[[11,12]]]]]]]];
  
  console.log("My Flat: ----------\n", array2.myflat(Infinity), array2.flat(Infinity));

let array2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [[[11, 12]]]]]]]];
let myarray = []
function myfunc(arr) {
  arr.forEach(rec => {
    if (typeof rec === "object") {
      myfunc(rec)
    } else {
      myarray.push(rec)
    }
  })
}
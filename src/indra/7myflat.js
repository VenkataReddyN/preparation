function myFlat(array, depth) {
  if (depth > 0) {
    return array.reduce((a, value) => {
      if (Array.isArray(value)) {
        return a.concat(myFlat(value, depth - 1));
      } else {
        return a.concat(value)
      }
    }, []);
  } else {
    return array.slice();
  }
}
   
console.log("FLAT", myFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [[[11,12]]]]]]]], Infinity))
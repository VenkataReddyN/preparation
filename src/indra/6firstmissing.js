function firstmissing (array) {
    array = Array.from(new Set(array));
    console.log(array);
    array = array.sort((a,b) => a-b).filter(num => num > 0);
    console.log('111', array);
    let j = 1
    for (let i = 1; i < array.length; i++) {
      if (array[i] === j) {
        j++;//valuevaluevalue
      } else {
        return j;
      }
    }
  }
  console.log("firstmissing", firstmissing([1,2,0,3,9,2,1,3,4,5,6,2,4,6,8]))
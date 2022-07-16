function removeDuplicates (array) {
    array.forEach((value, index) => {
      if(array.indexOf(value) !== array.lastIndexOf(value)) {
        array.splice(array.lastIndexOf(value), 1);
      }
    });
    return array;
}
console.log("remove duplicates", removeDuplicates([1,2,7,3,4,5,6,2,4,6,8]))


let array = [1,2,7,3,4,5,6,2,4,6,8];
Array.from(new Set(array))

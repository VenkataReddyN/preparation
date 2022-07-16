//The classic example of this is map, which takes an array and a function as arguments. map then uses this function to transform each item in the array, 
//returning a new array with the transformed data. Other popular examples in JavaScript are forEach, filter, and reduce.
const names = ['irish', 'daisy', 'anna'];

const transformNamesToUppercase = function(names) {
  return names.map(name => name.toUpperCase());
};
 
console.log(transformNamesToUppercase(names)); // ['IRISH', 'DAISY', 'ANNA']
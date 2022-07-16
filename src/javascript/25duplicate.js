let array = [4,1,2,3,4,5,3,4,2]
array.filter((i,pos) => {
  return pos === array.indexOf(i)
})

//ascending
let numbers = [0, 1 , 92, 673, 10, 20, 30 ];
numbers.sort((a,b) => {
  console.log(`${a} =-=-=-=-=-=-=-= ${b}`)
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
console.log(numbers);


//desending
numbers.sort((a,b) => {
  return b-a;
});
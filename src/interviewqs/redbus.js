//[[1,9],[2,8],[3,7],[4,6],[5,5]]

let arr = [1,2,3,4,5,6,7,8,9]
let newarry = []
let count = arr.length;
for (let i = 0; i < arr.length / 2; i++) {
  newarry.push([arr[i], arr[count - 1]]);
  count = count - 1;
}
// =========================================
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
// ==========================================

function addition(arg) {
  if (arg) {
    console.log(arg);
  } else {
    throw Error("no args")
  }
}
  addition();
// ============================================  

const https = require("https");
const options = {
  hostname:"google.com"
}
//axious

// ==========================================
let arr = [1,2,3,4,5]
let arrnew = Object.assign([],arr)
arr.pop();
console.log(arrnew)
console.log(arr)
// ==========================================

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

//=========================================  
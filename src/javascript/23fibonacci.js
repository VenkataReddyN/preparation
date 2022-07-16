
let num1 = 0;
let num2 = 1;
let tsum = 0;
let total = 10;

console.log(num1);
console.log(num2);

for (let i = 0; i < total; i++) {
  tsum = num1 + num2;
  num1 = num2;
  num2 = tsum
  console.log(tsum)
}


function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
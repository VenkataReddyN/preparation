function isPolindrome(n) {
  if (n < 0 || n > 2 ** 32) {
    return false;
  }
  const s = n;
  let r = 0;
  while (n > 0) {
    r = r * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  if (s === r) {
    return true;
  }
  return false;
}
console.log("is polindrome:", isPolindrome(12321));


let number = 1234321
let n = number;
let reversea = 0;

while (n) {
  reversea = reversea * 10 + n % 10;
  n = parseInt(n/10);
  console.log(n)
}

if (reversea === number) {
  console.log("IS A PALINDROME")
}
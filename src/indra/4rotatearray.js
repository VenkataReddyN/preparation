function rotateArray(a, k) {
  // if (!Array.isArray(a)) {
  //   return a;
  // }
  // const len = a.length;
  // k = parseInt(k % len);
  // // while(k > 0) {
  // //   a.unshift(a.pop());
  // //   k --;
  // // }
  // let t = [];
  // for (let i = 0; i < len; i++) {
  //   t[(i + k) % len] = a[i];
  // }
  let count = k;
  let t = a;
  while(count > 0) {
   t.push(t.shift());
   count = count - 1;
  }
  console.log("T:::", t)
  return t;
}
console.log("array", rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 12));
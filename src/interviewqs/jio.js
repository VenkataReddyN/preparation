let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

function mergeArray(arr1, arr2) {
  let arr3 = Array(arr1.length + arr2.length).fill(0);
  let m = arr1.length;
  let n = arr2.length;
  let k = 0;
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      arr3[k++] = arr1[i++]
    } else {
      arr3[k++] = arr2[j++];
    }
  }
  if (i < m) {
    arr3[k++] = arr1[i++]
  }
  if (j < n) {
    arr3[k++] = arr2[j++]
  }
  console.log(arr3);
}

mergeArray(arr1, arr2);
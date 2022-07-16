const strstr = (str, subStr) => {
    let left = 0;
    let right = subStr.length;
    let output = '';
    console.log("str str right:", right);
    while(right <= str.length) {
      output = str.slice(left, right);
      console.log("------------", output);
      if (output == subStr) {
       return left;
      } else {
         left ++; right++;
      }
    }
    return -1;  
  }
  console.log("substring :", strstr("indrasenareddy", "reddy"));
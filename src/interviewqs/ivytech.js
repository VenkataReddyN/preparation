//difference between git merge vs git rebase
//how to change already committed msg
//git commit --amend -m "New commit message"

//git stash apply
//How to implement a queue using two stacks?
//git fetch vs git pull
//fetch --->merge ---> working directory
//pull ---->working directory
//https://www.youtube.com/watch?v=t6zwA5NC-QE&list=PLVa1_NzxSxlbRnkpUovz8K6_lrfUQpi8s&index=11&ab_channel=SureshKumarMylam

//https://www.pixelstech.net/article/1549115148-git-reset-vs-git-revert

//add two arrays.
let a = [1,4,2,3,4,2]
let b = [9,6,5,3,2,4]
let c = []
Array.prototype.push.apply(a,b);

for (let i = 0; i < a.length; i++) {
 if(i === a.indexOf(a[i])) {
   c.push(a[i])
 }
}

//bobblesort
let temp;
for (let i = 0; i < c.length; i++) {
    for (let j = i + 1; j < c.length; j++) {
        if (c[i] > c[j]) {
            temp = c[i];
            c[i] = c[j];
            c[j] = temp
        }
    }
}
console.log(`a value is ${a}`)
console.log(`c value is ${c}`)

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  bubbleSort(numbers);
  console.log(numbers);
//remove duplicates in 
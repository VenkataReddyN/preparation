let user1 = {
    name: "indrasena",
    age: "33",
    salaray: "123.456",
    joinDate: new Date(),
  }
  
  let user2 = {
    name: "sena",
    age: "34",
    salaray: "456.789",
    joinDate2: new Date(),
    test: function() {
      return this.name;
    }
  }
  const user3 = {...user1, ...user2};
  
  console.log(user3.test());
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  Array.prototype.myForEach = function (callback) {
    for(let i=0; i< this.length; i++) {
      callback(this[i], i, this);
    }
  }
  
  let res1 = array.myForEach((item) => {
      // console.log('myForEach:', item * 10);
  });
  
  let res2 = array.forEach((item) => {
    // console.log('forEach', item * 10);
  });
  
  // console.log(res1, res2);
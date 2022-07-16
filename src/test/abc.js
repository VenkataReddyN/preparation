function myReducer(cb, init) {
    let initialVal = (init === undefined) ? this[0] : init;
    let startVal = (initialVal === undefined) ? 0 : 1;
    for (let i = startVal; i < this.length - 1; i++) {
        initialVal = cb(initialVal, this[i]);
    }
    return initialVal;
}

function myMap(cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this))
    }
    return arr;
}

function myFilter(cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
}

Array.prototype.myReducer = myReducer
Array.prototype.myMap = myMap
Array.prototype.myFilter = myFilter

let abc = [1,2,3,4,5,6,7,8];
//abc = abc.myReducer((a,b) => a+b);
abc = abc.myFilter((rec) => rec%2 === 0);
console.log(abc)
//Stream  input binary data:: ---->Buffer(array)----->Buffer(array)----->Buffer(array)----->Buffer(array)----->Buffer(array)----->output.

//Buffer is an array of memory which is outside V8
const buffer01 = Buffer.from("Venkat Reddy") // Buffer.from("Venkat Reddy","utf-8")
console.log(buffer01)
console.log(buffer01.toString())

const buffer02 = Buffer.from([1,2,3,4,5,6,7,8])
console.log(buffer02)

const buffer03 = Buffer.alloc(10)
console.log(buffer03)

const buffer04 = Buffer.allocUnsafe(10)
console.log(buffer04)

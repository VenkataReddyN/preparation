export {}

function add(a:number, b:number):number {
  return a + b
}
add(5,6);
add(5,"A");

//Optional Parameter
//b?:number
function adda(a:number, b?:number):number {
    return a + b
}
adda(5)
//Default value
function addb(a:number, b:number = 10):number {
    return a + b
}
addb(5)
addb(4,5)

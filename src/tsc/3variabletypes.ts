export {}
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Venkat";

//template strings
let sentence:string = `my name is ${name}
I am a begineer in Typescript`;
console.log(sentence)

//accurate intelligence ...display datatype related methods.
name = true;//Type 'boolean' is not assignable to type 'string'.ts(2322)

let n:null = null;
let u:undefined = undefined;

let isNew:boolean = null;
let myName:string = undefined;

let list1: number[] = [1,2,3,4,5,6]
let list2: Array<number> = [2,3,4,5,6];

//tuple
let persion1: [string, number] = ["venkat", 22];


//enum types
enum Color { RED, BLUE, GREEN }
let c:Color = Color.GREEN; // 2

enum newColor {RED = 3, BLUE, GREEN}

let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas"

let myVariable: any = 10;
console.log(myVariable.name); //throwing no error
myVariable();//throwing no error
myVariable.toUpperCase();//throwing no error

//To takel this unknow came.
let myVariablea: unknown = 10;
function hasName(obj:any) : obj is {name:string} {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if(hasName(myVariablea)) {
  console.log(myVariablea.name)
}
(myVariablea as string).toUpperCase();

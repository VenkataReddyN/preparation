let details = {
    firstName: "venkat",
    lastName:"N",
    printName: function() {
        console.log(` ${this.firstName}  ${this.lastName} `)
    }
}

let data = details.printName()

const printNames = function(...args) {
    console.log(`args ${this.firstName}  ${this.lastName} ${args[0]} ${args[1]}`)
}
const printName = function(age , location) {
    console.log(` ${this.firstName}  ${this.lastName} ${age} ${location}`)
}
//call and apply
//invoke the function using reference which replace this in the function.
//function borrowing
let mydetails = {
    firstName:"A",
    lastName:"B"
}

data = printName.call(mydetails,45,"HYD")
console.log("call "+data)

data = printName.apply(mydetails,[45,"HYD"])
console.log("apply "+ data)

data = printNames.apply(mydetails,[45,"HYD"])
console.log("apply "+ data)

//bind method (call & bind have same orgs)
//create a copy of method and bind to mydetails. use this function later for calling.
data = printNames.bind(mydetails,45,"HYD")
console.log("bind "+ data())
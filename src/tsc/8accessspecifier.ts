export {}
//private , public and protected.
//public by default we can access from any where..
//emp1.employeeName && m2.employeeName;

//private only that variable access in the class. greet method will work and delegate method won't work.
//Other emp1.employeeName && m2.employeeName won't work

//protected
//The variable will working in side call and also works for exted call.
//Other emp1.employeeName && m2.employeeName won't work
class Employee {
    private employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("venkat")
emp1.employeeName // venkat
emp1.greet() // Good Morning venkat


class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`MANAGER delegationg task ${this.employeeName}`);
    }
}

let m2 = new Manager("ABC");
m2.employeeName;
m2.greet();
m2.delegateWork();
export {}
class Employee {
    employeeName: string;
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
        console.log("MANAGER delegationg task");
    }
}

let m2 = new Manager("ABC");
m2.employeeName;
m2.greet();
m2.delegateWork();

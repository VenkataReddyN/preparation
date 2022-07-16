//GIT REVERT COMMANDS

//OPS
//POLYMORPHYSIM
//MULTI INHERITANCE ?
//INDEX OF TABLE IN SQL
//INNER JOIN AND OUTER JOIN
//ONE TO MANY, MANY TO MANY RELATION SHIPS
//create STACK
// Stack class
//Nullif
//Create table if not exists
class Stack {

  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  push(element) {
    // push element into the items
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }
  // pop()
  // peek()
  // isEmpty()
  // printStack()
}

//Linked list and double linked list.
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

//Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, 
//they are just used to speed up searches/queries.

//CREATE INDEX index_name ON table_name (column1, column2, ...);
//CREATE INDEX idx_pname ON Persons (LastName, FirstName);
//DROP INDEX index_name ON table_name;


//One-to-one relationships
//In a one-to-one relationship, one record in a table is associated with one and only one record in another table. For example, in a school database, 
//each student has only one student ID, and each student ID is assigned to only one person.

//One-to-many relationships
//In a one-to-many relationship, one record in a table can be associated with one or more 
//records in another table. For example, each customer can have many sales orders.

//Many-to-many relationships
//A many-to-many relationship occurs when multiple records in a table are associated with 
//multiple records in another table. For example, a many-to-many relationship exists between 
//customers and products: customers can purchase various products, and products can be 
//purchased by many customers.

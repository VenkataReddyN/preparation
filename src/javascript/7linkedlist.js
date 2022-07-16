// queue is initially empty
var Queue = {front: null, back: null};

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
function Node(data, next) {
  this.data = data;
  this.next = next;
} 

// add elements to queue in O(1) time
function Enqueue(element) {
  var N = new Node(element, null);
  if (Queue.back === null) {
    Queue.front = N;
    Queue.back = N; 
  } else { 
    Queue.back.next = N; 
    Queue.back = Queue.back.next;
  } 
}

// remove first element from queue in O(1) time
function Dequeue() {
  if (Queue.front !== null) { 
    var first = Queue.front;
    Queue.front = Queue.front.next; 
    return first.data;
  } else {
    if (Queue.back !== null) { Queue.back = null; }
    return 'Cannot dequeue because queue is empty';
  }
}

Enqueue('a'); 
Enqueue('b'); 
Enqueue('c');
Enqueue('d'); 
Enqueue('e'); 
Enqueue('f'); 
Enqueue('g'); 

//Dequeue();

//=========================================================

// User defined class node
class Node {
	// constructor
	constructor(element)
	{
		this.element = element;
		this.next = null
	}
}

// linkedlist class
class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}
  add(element)
  {
    // creates a new node
    var node = new Node(element);
    // to store current node
    var current;
    // if list is Empty add the element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
        // iterate to the end of the list
        while (current.next) {
            current = current.next;
        }
        // add node
        current.next = node;
    }
    this.size++;
    console.log(this.head)
   }
}

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(6)
ll.add(7)
ll.add(8)
ll.add(9)
ll.add(10)

//{"element":1,"next":{"element":2,"next":{"element":3,"next":{"element":4,"next":{"element":6,"next":{"element":7,"next":{"element":8,"next":{"element":9,"next":{"element":10,"next":null}}}}}}}}}

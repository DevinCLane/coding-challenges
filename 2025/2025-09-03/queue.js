/* 
Queue
Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.
An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out.
Waiting Lines
In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
The enqueue method takes in the item as a parameter, while the dequeue method does not.
The size method simply returns the number of items in the queue.
Wait, what?
To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
To dequeue an item means means to remove the item at the front, or head, of the queue.
In a queue, we remove the item the least recently added.
JavaScript Methodology
Queues can be implemented in JavaScript using arrays.
You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.
As long as the tests pass, go for it!


https://www.codewars.com/kata/55a9c0994cb7e284d500005e/javascript
*/

// enqueue
// dequeue
// size

class Queue {
    constructor() {
        this.storage = {};
        this.head = this.tail = 0;
    }

    size() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.head === this.tail;
    }

    enqueue(val) {
        this.storage[this.tail] = val;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            let removed = this.storage[this.head];
            delete this.storage[this.head];
            this.head++;
            return removed;
        }
    }
}

/* 
time: 
- enqueue: O(1)
- dequeue: O(1)
- size: O(1)
space: O(n) where n is the number of items in the queue
*/

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.size(), "expect 3");
console.log(queue.dequeue(), "expect 1");
console.log(queue.dequeue(), "expect 2");
console.log(queue.dequeue(), "expect 3");
console.log(queue.size(), "expect 0");

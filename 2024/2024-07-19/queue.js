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

class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(element) {
        this.list.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.list.shift();
    }

    size() {
        return this.list.length;
    }

    isEmpty() {
        this.list.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
console.log(queue, "add 1");
queue.enqueue(2);
console.log(queue, "add 2");
queue.enqueue(3);
console.log(queue, "add 3");
console.log(queue.size(), "size 3");
console.log(queue.dequeue(), "remove 1");
console.log(queue.dequeue(), "remove 2");
console.log(queue.dequeue(), "remove 3");
console.log(queue.dequeue(), "undefined, can't remove from empty list");

class ObjectQueue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        this.size--;
        return removed;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const objectQueue = new ObjectQueue();
console.log("~~object queue~~");
objectQueue.enqueue(1);
console.log(objectQueue, "add 1");
objectQueue.enqueue(2);
console.log(objectQueue, "add 2");
objectQueue.enqueue(3);
console.log(objectQueue, "add 3");
console.log(objectQueue.size, "size 3");
console.log(objectQueue.dequeue(), "remove 1");
console.log(objectQueue.dequeue(), "remove 2");
console.log(objectQueue.dequeue(), "remove 3");
console.log(objectQueue.size, "size is 0");
console.log(objectQueue.dequeue(), "undefined, can't remove from empty list");

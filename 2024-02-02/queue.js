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

// using an array
class ArrayQueue {
    constructor() {
        this.storage = [];
    }

    enqueue(item) {
        this.storage.push(item);
    }

    dequeue() {
        return this.storage.shift();
    }

    size() {
        return this.storage.length;
    }
}

console.log("array-based queue implementation tests");
const arrayQueue = new ArrayQueue();

console.log(arrayQueue.size() === 0, "true - queue is empty");

arrayQueue.enqueue(1);
console.log(arrayQueue.size() === 1, "true - queue has one item");

arrayQueue.enqueue(2);
console.log(arrayQueue.size() === 2, "true - queue has two items");

console.log(arrayQueue.dequeue() === 1, "true - the first item is 1");
console.log(
    arrayQueue.size() === 1,
    "true - queue should only have 1 item now"
);

console.log(
    arrayQueue.dequeue() === 2,
    "true - should return the second item which is 2"
);
console.log(arrayQueue.size() === 0, "true - queue should now be empty");

console.log(
    arrayQueue.dequeue() === undefined,
    "true - dequeing from empty queue should return undefined"
);

// using objects
class ObjectQueue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        this.storage[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.head === this.tail) return undefined; // if the queue is empty
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }

    size() {
        return this.tail - this.head;
    }
}

console.log("\nObject-based queue implementation tests");

const objectQueue = new ObjectQueue();

console.log(objectQueue.size() === 0, "true, queue is empty");

objectQueue.enqueue(1);
console.log(objectQueue.size() === 1, "true, queue has one item");

objectQueue.enqueue(2);
console.log(objectQueue.size() === 2, "true, queue has two items");

console.log(objectQueue.dequeue() === 1, "true, returns first item which is 1");
console.log(objectQueue.size() === 1, "true, should have 1 item now");

console.log(
    objectQueue.dequeue() === 2,
    "true, should return second item which is 2"
);
console.log(objectQueue.size() === 0, "true, should be empty now");

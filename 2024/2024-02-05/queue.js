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

class ArrayQueue {
    constructor() {
        this.list = [];
    }

    enqueue(item) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }

    size() {
        return this.list.length;
    }
}

console.log("array queue test cases");
const arrayQueue = new ArrayQueue();

console.log(arrayQueue.size() === 0, "true: array is empty");

arrayQueue.enqueue(1);
console.log(arrayQueue.size() === 1, "true: array has 1 item");

arrayQueue.enqueue(2);
console.log(arrayQueue.size() === 2, "true: array has 2 items");

console.log(arrayQueue.dequeue() === 1, "true: the first item is 1");
console.log(arrayQueue.size() === 1, "true: the array is 1 item long now");

console.log(
    arrayQueue.dequeue() === 2,
    "true: should return the second item which is 2"
);
console.log(arrayQueue.size() === 0, "true: the array is empty now");

console.log(
    arrayQueue.dequeue() === undefined,
    "true: should return undefined from an empty array"
);

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
        if (this.head === this.tail) return undefined; // if the object is empty
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }

    size() {
        return this.tail - this.head;
    }
}

const objectQueue = new ObjectQueue();

console.log("\nObject based queue test cases");
console.log(objectQueue.size() === 0, "true: object is empty");

objectQueue.enqueue(1);
console.log(objectQueue.size() === 1, "true: object has 1 item now");

objectQueue.enqueue(2);
console.log(objectQueue.size() === 2, "true: object has 2 items now");

console.log(objectQueue.dequeue() === 1, "true: returns first item which is 1");
console.log(objectQueue.size() === 1, "true: one item left in object");

console.log(
    objectQueue.dequeue() === 2,
    "true: returns second item which is 2"
);
console.log(objectQueue.size() === 0, "true: object is empty");

console.log(
    objectQueue.dequeue() === undefined,
    "true: returns undefined from an empty object"
);

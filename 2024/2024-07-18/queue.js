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

const queue = new Queue();
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(4);
console.log(queue);
console.log(queue.dequeue(), "dequeue: 1");
console.log(queue.dequeue(), "dequeue: 2");
console.log(queue.dequeue(), "dequeue: 3");
console.log(queue.size(), "size: 1");

// using objects for better efficiency to not use shift
class ObjectQueue {
    #storage;
    #head;
    #tail;
    #size;
    constructor() {
        this.#storage = {};
        this.#head = 0;
        this.#tail = 0;
        this.#size = 0;
    }

    enqueue(item) {
        this.#storage[this.#tail] = item;
        this.#tail++;
        this.#size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let removed = this.#storage[this.#head];
        delete this.#storage[this.#head];
        this.#head++;
        this.#size--;
        return removed;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }
}

const queue2 = new ObjectQueue();
queue2.enqueue(1);
console.log("object queue");
console.log(queue2);
queue2.enqueue(2);
console.log(queue2);
queue2.enqueue(3);
console.log(queue2);
queue2.enqueue(4);
console.log(queue2);
console.log(queue2.dequeue(), "dequeue: 1");
console.log(queue2.dequeue(), "dequeue: 2");
console.log(queue2.dequeue(), "dequeue: 3");
console.log(queue2.size(), "size: 1");

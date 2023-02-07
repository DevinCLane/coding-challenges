/* 
Implement a queue in javascript
*/

// with arrays
// class Queue {
//     constructor() {
//         this.list = []
//     }

//     size() {
//         return this.list.length
//     }

//     enqueue(item) {
//         this.list.push(item)
//     }

//     dequeue(item) {
//         return this.list.shift()
//     }
// }

// using objects for better efficiency to not use shift

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++
    }

    dequeue(element) {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++
        return removed;
    }
}

const queue = new Queue()
console.log(queue)

queue.enqueue('spider plant')
console.log(queue)
queue.enqueue('pothos')
console.log(queue)
queue.enqueue('ficus')
console.log(queue)
queue.dequeue('spider plant')
console.log(queue)
queue.enqueue('dumb cane')
console.log(queue)

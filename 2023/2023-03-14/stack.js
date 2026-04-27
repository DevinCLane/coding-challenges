/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(value) {
        this.size++;
        this.storage[this.size] = value;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const stack = new Stack();
stack.push(1);
console.log(stack, 1);
stack.push(2);
console.log(stack, 1, 2);
stack.push(3);
console.log(stack, 1, 2, 3);
stack.push(4);
console.log(stack, 1, 2, 3, 4);
console.log(stack.pop(), 4); // 4
console.log(stack.pop(), 3); // 3
console.log(stack.peek(), 2); // 2

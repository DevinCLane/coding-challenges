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

stack.push("apple");
stack.push("banana");
stack.push("plum");

stack.pop();

/* 
Stack: implement a stack in JavaScript

a stack is a first in last out data structure. Imagine a stack of plates. 
You stack a series of plates one on top of the other. When you go to pull a plate off the stack, you are pulling the most recently placed plate

// push, pop, peek

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
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());

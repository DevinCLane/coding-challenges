/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }
    pop() {
        if (this.isEmpty()) {
            return "empty stack";
        }
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }
    peek() {
        if (this.isEmpty()) {
            return "Empty stack";
        }
        return this.storage[this.size];
    }
    isEmpty() {
        return this.size === 0;
    }
}

const stack = new Stack();
console.log(stack);
stack.push(1);
console.log(stack, "push 1");
stack.push(2);
console.log(stack, "push 2");
stack.push(3);
console.log(stack, "push 3");
stack.push(4);
console.log(stack, "push 4");
console.log(stack.pop(), "pop 4");
console.log(stack.pop(), "pop 3");
console.log(stack.peek(), "peek 2");
console.log(stack.size, "size: 2");
console.log(stack.pop(), "pop 2");
console.log(stack.pop(), "pop 1");
console.log(stack.pop(), "undefined: empty stack");

/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {};
        this.tail = 0;
    }

    push(value) {
        this.tail++;
        this.storage[this.tail] = value;
    }

    pop() {
        if (this.isEmpty()) {
            return "empty stack";
        }
        let removed = this.storage[this.tail];
        delete this.storage[this.tail];
        this.tail--;
        return removed;
    }

    peek() {
        return this.storage[this.tail];
    }

    isEmpty() {
        return !this.storage[this.tail];
    }
}

const stack = new Stack();
console.log(stack, "empty stack");
stack.push(1);
console.log(stack, "1");
stack.push(2);
console.log(stack, "2");
stack.push(3);
console.log(stack, "3");
console.log(stack.pop(), 3);
console.log(stack.pop(), 2);
console.log(stack.pop(), 1);
console.log(stack.pop(), "empty stack");

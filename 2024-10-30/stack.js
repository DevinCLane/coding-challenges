/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {};
        this.head = this.tail = 0;
    }

    push(value) {
        this.storage[this.tail] = value;
        this.tail++;
    }

    pop() {
        let removed = this.storage[this.tail - 1];
        delete this.storage[this.tail];
        this.tail--;
        return removed;
    }

    size() {
        return this.tail - this.head;
    }

    peek() {
        return this.storage[this.tail - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek(), "expect 3");
console.log(stack.size(), "expect size = 3");
console.log(stack.pop(), "expect 3");
console.log(stack.pop(), "expect 2");
console.log(stack.pop(), "expect 1");

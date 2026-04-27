/* 
Implement a stack with javascript;
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
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());

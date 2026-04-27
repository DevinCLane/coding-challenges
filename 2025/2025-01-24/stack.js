/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(item) {
        this.storage[this.size] = item;
        this.size++;
    }
    pop() {
        this.size--;
        let removed = this.storage[this.size];
        delete this.storage[this.size];
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
console.log(stack.pop());

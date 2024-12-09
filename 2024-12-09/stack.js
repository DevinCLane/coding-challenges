/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(item) {
        this.size++;
        this.storage[this.size] = item;
    }
    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
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
console.log(stack.pop());

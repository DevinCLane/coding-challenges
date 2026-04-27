/* 

Stack: implement a stack in JavaScript


*/

class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) return "empty stack";
        return this.stack.pop();
    }

    size() {
        this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
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
console.log(stack.pop());

class ObjectStack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(item) {
        this.size++;
        this.storage[this.size] = item;
    }

    pop() {
        if (this.isEmpty()) return "empty stack";
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }

    isEmpty() {
        return this.size === 0;
    }
}

const objectStack = new ObjectStack();
objectStack.push(1);
objectStack.push(2);
objectStack.push(3);
console.log("\n", objectStack);
console.log(objectStack.pop(), "3");
console.log(objectStack.pop(), "2");
console.log(objectStack.pop(), "1");
console.log(objectStack.pop(), "empty stack");

/* 
Implement a stack
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

console.log("Test Stack Initialization");
console.log(stack.size === 0); // true

console.log("Test Push Method");
stack.push("First");
console.log(stack.size === 1); // true
console.log(stack.storage[1] === "First"); // true

stack.push("Second");
console.log(stack.size === 2); // true
console.log(stack.storage[2] === "Second"); // true

console.log("Test Pop Method");
console.log(stack.pop() === "Second"); // true
console.log(stack.size === 1); // true

console.log("Test Peek Method");
console.log(stack.peek() === "First"); // true
console.log(stack.size === 1); // true

console.log("Test Pop to Empty");
console.log(stack.pop() === "First"); // true
console.log(stack.size === 0); // true

console.log("Test Pop on Empty Stack");
console.log(stack.pop() === undefined); // true

// using an array

class ArrayStack {
    #storage; // private field

    constructor() {
        this.#storage = [];
    }

    push(element) {
        this.#storage.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
        return this.#storage.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
        return this.#storage[this.#storage.length - 1];
    }

    isEmpty() {
        return this.#storage.length === 0;
    }

    size() {
        return this.#storage.length;
    }
}

const arrayStack = new ArrayStack();

console.log("Test arrayStack Initialization");
console.log(arrayStack.size() === 0); // true

console.log("Test Push Method");
arrayStack.push("First");
console.log(arrayStack.size() === 1); // true
console.log(arrayStack.peek() === "First"); // true

arrayStack.push("Second");
console.log(arrayStack.size() === 2); // true
console.log(arrayStack.peek() === "Second"); // true

console.log("Test Pop Method");
console.log(arrayStack.pop() === "Second"); // true
console.log(arrayStack.size() === 1); // true

console.log("Test Peek Method");
console.log(arrayStack.peek() === "First"); // true
console.log(arrayStack.size() === 1); // true

console.log("Test Pop to Empty");
console.log(arrayStack.pop() === "First"); // true
console.log(arrayStack.size() === 0); // true

console.log("Test Pop on Empty arrayStack");
try {
    arrayStack.pop();
} catch (e) {
    console.log(e.message === "stack is empty"); // true
}

console.log("Test Peek on Empty arrayStack");
try {
    arrayStack.peek();
} catch (e) {
    console.log(e.message === "stack is empty"); // true
}

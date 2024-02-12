/* 
Implement a stack
*/

// using an array
class ArrayStack {
    #storage;

    constructor() {
        this.#storage = [];
    }

    isEmpty() {
        return this.#storage.length === 0;
    }

    push(item) {
        this.#storage.push(item);
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

    size() {
        return this.#storage.length;
    }
}

const arrayStack = new ArrayStack();

console.log("Test arrayStack Initialization");
console.log(arrayStack.size() === 0);

console.log("test push method");
arrayStack.push("first");
console.log(arrayStack.size() === 1);
console.log(arrayStack.peek() === "first");

arrayStack.push("second");
console.log(arrayStack.size() === 2);
console.log(arrayStack.peek() === "second");

console.log("test pop method");
console.log(arrayStack.pop() === "second");
console.log(arrayStack.size() === 1);

console.log(arrayStack.peek() === "first");
console.log(arrayStack.size() === 1);

console.log(arrayStack.pop() === "first");
console.log(arrayStack.size() === 0);

console.log("test pop on empty stack");
try {
    arrayStack.pop();
} catch (e) {
    console.log(e.message === "stack is empty");
}
console.log("test peek on empty stack");
try {
    arrayStack.peek();
} catch (e) {
    console.log(e.message === "stack is empty");
}

// using an object

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
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const objectStack = new ObjectStack();

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

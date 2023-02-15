/* 
Implement a stack in JavaScript: FILO data structure.
Push, pop and peek
*/

class Stack {
    constructor() {
        // store elements in an object
        this.storage = {}
        // keep track of the size (somewhat similar to the head)
        this.size = 0
    }

    push(element) {
        // when we push an element onto the stack, the size is larger
        this.size++
        // add the item to the top of the stack
        this.storage[this.size] = element
    }

    pop() {
        // remove the top element from the stack
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        // decremement the size, as we now have one less item
        this.size--
        return removed
    }

    peek() {
        // take a peek at what is on the top of our stack
        return this.storage[this.size]
    }
}

const stack = new Stack
console.log(stack)
stack.push('apple')
console.log(stack)
stack.push('banana')
console.log(stack)
stack.push('strawberry')
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)
stack.peek()
console.log(stack)
stack.pop()
console.log(stack)
/* 
Stack: implement a stack in JavaScript
*/

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }
    // add to our stack
    push(element) {
        // creating a 1 index based system so that when we delete we can say delete this.storage[this.size]
        this.size++
        this.storage[this.size] = element
    }
    // remove from the top of the stack
    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    // tell us what is on the top of the stack
    peek() {
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
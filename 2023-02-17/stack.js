/* 

Stack: implement a stack in JavaScript

*/

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
    }

    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }

    peek() {
        return this.storage[this.size]
    }
}

const stack = new Stack
console.log(stack)
stack.push('apple')
console.log(stack)
stack.push('strawberry')
console.log(stack)
stack.push('banana')
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)
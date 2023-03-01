/* 
Stack: implement a stack in JavaScript

push
pop
peek
*/

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(value) {
        this.size++
        this.storage[this.size] = value
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

const stack = new Stack()

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
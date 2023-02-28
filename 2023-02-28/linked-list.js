/* 
Implement a doubly linked list in JavaScript

Append
Prepend
Delete Head
Delete tail
Search
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if the list has 0 nodes
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } 
        // if the list has >= 1 node
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    prepend(value) {
        // if the list has 0 nodes
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }

        else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }

    deleteHead() {
        // if the list is empty
        if (!this.head) {
            return null
        }
        // if list has >=1 node
        else {
            let removedHead = this.head
            // if the list has only 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            // if list has > 1 node
            else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    deleteTail() {
        // if list is empty (no tail)
        if (!this.tail) {
            return null
        }
        // if the list has >= 1 node
        else {
            let removedTail = this.tail
            // if the list has only 1 node left
            if (this.tail === this.head) {
                this.tail = this.head = null
            }
            // if list has > 1 node
            else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }
    }

    search(value) {
        let currentNode = this.head

        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

const list = new LinkedList()

console.log(list)
list.append(1)
console.log(list)
list.append(2)
console.log(list)
list.append(3)
console.log(list)

list.prepend(0)
console.log(list)
list.prepend(-1)
console.log(list)

list.search(1, 'find 1')
console.log(list)
list.search(3, 'find 3')
console.log(list)
list.search(235789, 'find 235789')
console.log(list)

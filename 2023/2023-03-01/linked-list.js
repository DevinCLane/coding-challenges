/* 
Implement a doubly linked list in JavaScript

create a node class that has value, prev, next
append
prepend
delete head
delete tail
search
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if the list has 0 nodes
        if (!this.tail) {
            this.tail = this.head = new Node(value)
        }
        // if the list has >= 1 node
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            this.tail.prev = oldTail
            oldTail.next = this.tail
        }
    }

    prepend(value) {
        // if the list has 0 nodes
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        // if the list has >= 1 node
        else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
            oldHead.prev = this.head
        }
    }

    deleteHead() {
        // if the list is empty
        if (!this.head) {
            return null``
        } 
        else {
            let removedHead = this.head
            // if the list has 1 node. i.e., this is the last node
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            // if the list has > 1 node
            else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    deleteTail() {
        // if the list is empty
        if (!this.tail) {
            return null
        }
        else {
            let removedTail = this.tail
            // if there is only 1 node left
            if (this.tail === this.head) {
                this.tail = this.head = null
            }
            // if there is > 1 node left
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
list.search(1)
console.log(list)
list.search(4)
console.log(list)
list.search(3)
console.log(list)
list.deleteHead()
console.log(list)
list.deleteTail()
console.log(list)
list.deleteTail()
console.log(list)
list.deleteHead()
console.log(list)
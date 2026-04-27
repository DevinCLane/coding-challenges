/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if list has 0 nodes
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
        // if list has 0 nodes
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        // if list has >= 1 node
        else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
            oldHead.prev = this.head
        }
    }

    deleteHead() {
        // if list is empty
        if (!this.head) {
            return null
        } 
        else {
            let removedHead = this.head
            // if list has only 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    deleteTail() {
        // if list is empty
        if (!this.tail) {
            return null
        }
        else {
            let removedTail = this.tail
            // if there's only 1 node left
            if (this.tail === this.head) {
                this.tail = this.head = null
            }
            else {
                this.tail = this.tail.prev
                this.tail.next = null1
            }
            return removedTail.value
        }
    }

    search(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
}

// append
// prepend
// delete head
// delete tail
// search

// node class
class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}
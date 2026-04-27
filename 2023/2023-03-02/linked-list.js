/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }
    // append
    append(value) {
        // if list has no nodes
        if (!this.tail) {
            this.tail = this.head = new Node(value)
        }
        // if list has >= 1 node
        else {
            // if the list has 1 node
            let oldTail = this.tail
            this.tail = new Node(value)
            this.tail.prev = oldTail
            oldTail.next = this.tail
        }
    }
    // prepend
    prepend(value) {
        // if list has no nodes
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
    // deleteHead
    deleteHead() {
        // if list has no nodes
        if (!this.head) {
            return null
        }
        else {
            let removedHead = this.head
            // if list has 1 node
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
    // deleteTail
    deleteTail() {
        // if list has no nodes
        if (!this.tail) {
            return null
        }
        else {
            let removedTail = this.tail
            // if list has 1 node
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            // if list has > 1 node
            else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }
    }
    // search
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

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(1)
console.log(linkedList, 1)
linkedList.append(2) // 1 2
console.log(linkedList, 1, 2)
linkedList.append(3)
console.log(linkedList, 1, 2, 3)
linkedList.prepend(0)
console.log(linkedList, 0, 1, 2, 3)
linkedList.prepend(-1)
console.log(linkedList, -1, 0, 1, 2, 3)
linkedList.deleteHead()
console.log(linkedList, 0, 1, 2, 3)
linkedList.deleteTail()
console.log(linkedList, 0, 1, 2)
linkedList.search(2)
console.log(linkedList, true)
linkedList.search(22)
console.log(linkedList, null)
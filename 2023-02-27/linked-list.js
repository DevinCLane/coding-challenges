/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if the list is empty
        if (!this.tail) {
            // then the head and the tail will be this new node
            this.head = this.tail = new Node(value)
        } 
        // if the linked list has >= 1 node
        else {
            // store our old tail
            let oldTail = this.tail
            // create a new node, and this is our new tail
            this.tail = new Node(value)
            // the old tail's next now points to the new tail
            oldTail.next = this.tail
            // the new tail's prev now point to the old tail
            this.tail.prev = oldTail
        }
    }

    prepend(value) {
        // if the list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        // if linked list had >= one node
        else {
            // store our old head
            let oldHead = this.head
            // create a new node, that is our new head
            this.head = new Node(head)
            // point the old head's prev to the new head
            oldHead.prev = this.head
            // point the new head's next to the old head
            this.head.next = oldHead
        }
    }

    deleteHead() {
        // if list is empty (there is no head)
        if (!this.head) {
            return null
        }
        // if list >= 1 node
        else {
            let removedHead = this.head
            // if there's only 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            // if linked list has > 1 node
            else {
                this.head = this.head.next
                this.head.prev = null
            }
        return removedHead.value
        }
    }
}

// create our Node structure. this will be the items we're adding to our linked list
class Node {
    constructor(value, next, prev) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}
/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(val) {
        if (!this.tail) {
            this.head = this.tail = new Node(val);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(val);
            this.tail.prev = oldTail;
            oldTail.next = this.tail;
        }
    }
    prepend(val) {
        if (!this.head) {
            this.head = this.tail = new Node(val);
        } else {
            let oldHead = this.head;
            this.head = new Node(val);
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        } else {
            let removedHead = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removedHead;
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            if (this.tail === this.head) {
                this.head = this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail;
        }
    }
    search(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

class Node {
    constructor(val, prev, next) {
        this.val = val;
        this.prev = prev || null;
        this.next = next || null;
    }
}

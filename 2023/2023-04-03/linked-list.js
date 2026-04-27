/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        } else {
            let oldHead = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = oldHead.next;
                this.head.prev = null;
            }
            return oldHead;
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        } else {
            let oldTail = this.tail;
            if (this.tail === this.head) {
                this.tail = this.head = null;
            } else {
                this.tail = oldTail.prev;
                this.tail.next = null;
            }
            return oldTail;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

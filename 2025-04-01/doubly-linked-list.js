/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null;
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

    append(val) {
        if (!this.tail) {
            this.tail = new Node(val);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(val);
            this.tail.prev = oldTail;
            oldTail.next = this.tail;
        }
    }

    search(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) {
                return current.val;
            } else {
                current = current.next;
            }
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

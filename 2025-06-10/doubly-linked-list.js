class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(val) {
        if (!this.tail) {
            this.tail = this.head = new Node(val);
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
            // if linked list has >= 1 node
            let removedHead = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                // if list has > 1 node
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removedHead.val;
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
            return removedTail.val;
        }
    }

    search(val) {
        let curr = this.head;
        while (curr) {
            if (curr.val === val) {
                return curr;
            } else {
                curr = curr.next;
            }
        }
        return null;
    }
}

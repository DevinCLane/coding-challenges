/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    // append
    append(value) {
        // if the list is empty
        if (!this.tail) {
            this.tail = this.head = new Node(value);
        }

        // if the list has > 1 node
        else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }
    // prepend
    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    }

    // deleteHead
    deleteHead() {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        let removedHead = this.head;
        // if this is the last item in the list
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return removedHead;
    }
    // deleteTail
    deleteTail() {
        if (!this.tail) {
            return null;
        }
        let removedTail = this.tail;
        if (this.tail === this.head) {
            this.tail = this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return removedTail;
    }
    // search
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

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(-2);
list.prepend(-4);
console.log(list, "log the list");
console.log(list.deleteHead(), "remove -4");
console.log(list.deleteTail(), "remove 4");
console.log(list.search(3), "true");
console.log(list.search(32), "search for 32: false");

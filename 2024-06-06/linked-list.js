/* 
Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(value) {
        // if the list is empty
        if (!this.tail) {
            this.tail = this.head = new Node(value);
        }
        // if list has > 1 value
        else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    prepend(value) {
        // if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value);
        }
        // if list has > 1 value
        else {
            let oldHead = this.head;
            this.head = new Node(value);
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    }

    deleteHead() {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        let removedHead = this.head;

        // if this is the last node in the list
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return removedHead;
    }

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
list.prepend(-5);
console.log(list);
console.log(list.deleteHead());
console.log(list.deleteTail());
console.log(list);
console.log(list.search(2));
console.log(list.search(11));

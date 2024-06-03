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
        // if the list has > 1 element
        else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    prepend(value) {
        // if the list is empty
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
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // if the list has > 1 element
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
        // if the list is empty
        if (!this.tail) {
            return null;
        }
        // if the list has > 1 element
        let removedTail = this.tail;
        // if this is the last node in the list
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
list.append(5);
list.prepend(6);
// console.log(list);
console.log(list.deleteHead(), "delete head");
console.log(list.deleteTail(), "delete tail");
console.log(list.search(3), "search for 3");
console.log(list.search(-1), "search for -1");

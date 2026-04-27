/* 

Implement a doubly linked list in JavaScript
*/

class LinkedList {
    constructor() {
        this.head = this.tail = 0;
    }

    append(value) {
        if (!this.tail) {
            this.tail = this.head = new Node(value);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            this.tail.prev = oldTail;
            oldTail.next = this.tail;
        }
    }

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
            return removedHead.value;
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            if (this.tail === this.head) {
                this.tail = this.head = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail.value;
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

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list, "1, 2, 3");

list.prepend(0);

// search
console.log(list.search(2).value === 2, "true");
console.log(list.search(5) === null, "true");

console.log(list.deleteHead() === 0, "true");
console.log(list.deleteTail() === 3, "true");

// empty list
const emptyList = new LinkedList();
console.log(emptyList.deleteHead() === null, "true");
console.log(emptyList.deleteTail() === null, "true");

// single element list
emptyList.append(1);
console.log(emptyList.head === emptyList.tail, "true");
emptyList.deleteHead();
console.log(emptyList.head === null && emptyList.tail === null, "true");

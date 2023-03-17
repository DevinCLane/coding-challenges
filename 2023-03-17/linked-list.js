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
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            this.tail.prev = oldTail;
            oldTail.next = this.tail;
        }
    }

    prepend(value) {
        // if the list is empty
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
        // if the list is empty
        if (!this.head) {
            return null;
        } else {
            let removedHead = this.head;
            // if the list has only 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            // if the list has >1 node left
            else {
                // move the head over
                this.head = this.head.next;
                // break the connection to the previous head
                this.head.prev = null;
            }
            return removedHead.value;
        }
    }

    deleteTail() {
        // if the list is empty
        if (!this.tail) {
            this.tail = this.head = null;
        } else {
            let removedTail = this.tail;
            if (this.tail === this.head) {
                this.tail = this.head = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail;
        }
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    }
}
const linkedList = new LinkedList();
linkedList.append(1);
console.log(linkedList);
linkedList.append(2);
console.log(linkedList);
linkedList.append(3);
console.log(linkedList);
linkedList.append(4);
console.log(linkedList);
linkedList.append(5);
console.log(linkedList);
linkedList.prepend(0);
console.log(linkedList);
linkedList.prepend(-1);
console.log(linkedList);
linkedList.deleteHead();
console.log(linkedList);
linkedList.deleteTail();
console.log(linkedList);
console.log(linkedList.search(4));
console.log(linkedList.search(44));
console.log(linkedList.search(1));

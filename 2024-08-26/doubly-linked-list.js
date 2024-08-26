/* 
Implement a doubly linked list in JavaScript
*/

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
            let removedHead = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
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
                this.tail = this.head = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail.val;
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

// Test cases
const list = new LinkedList();

// Test append
list.append(1);
list.append(2);
list.append(3);
console.log("After appending 1, 2, 3:");
console.log("Head:", list.head.val); // Expected: 1
console.log("Tail:", list.tail.val); // Expected: 3

// Test prepend
list.prepend(0);
console.log("\nAfter prepending 0:");
console.log("Head:", list.head.val); // Expected: 0
console.log("Tail:", list.tail.val); // Expected: 3

// Test deleteHead
const deletedHead = list.deleteHead();
console.log("\nAfter deleting head:");
console.log("Deleted head value:", deletedHead); // Expected: 0
console.log("New head:", list.head.val); // Expected: 1

// Test deleteTail
const deletedTail = list.deleteTail();
console.log("\nAfter deleting tail:");
console.log("Deleted tail value:", deletedTail); // Expected: 3
console.log("New tail:", list.tail.val); // Expected: 2

// Test search
const foundNode = list.search(2);
console.log("\nSearching for value 2:");
console.log("Found node value:", foundNode ? foundNode.val : "Not found"); // Expected: 2

const notFoundNode = list.search(5);
console.log("Searching for value 5:");
console.log("Found node value:", notFoundNode ? notFoundNode.val : "Not found"); // Expected: Not found

// Test edge cases
const emptyList = new LinkedList();
console.log("\nTesting empty list:");
console.log("Delete head of empty list:", emptyList.deleteHead()); // Expected: null
console.log("Delete tail of empty list:", emptyList.deleteTail()); // Expected: null

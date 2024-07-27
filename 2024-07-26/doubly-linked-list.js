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
            oldHead.prev = this.head;
            this.head.next = oldHead;
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
        this.prev = prev || null;
        this.next = next || null;
    }
}

const list = new LinkedList();
console.log("linked list");
list.append(1);
console.log(list, "append 1");
list.append(2);
console.log(list, "append 2");
list.append(3);
console.log(list, "append 3");
list.append(4);
console.log(list, "append 4");
list.prepend(0);
console.log(list, "prepend 0");
list.prepend(-1);
console.log(list, "prepend -1");
list.prepend(-2);
console.log(list, "prepend -2");
console.log(list.deleteHead(), "delete head: -2");
console.log(list.deleteTail(), "delete tail: 4");
console.log(list.search(2), "search: 2");
console.log(list.search(22), "search: 22, false");

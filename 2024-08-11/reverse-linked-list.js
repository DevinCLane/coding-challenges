/* 
Reverse linked list

Given the head of a singly linked list, reverse the list, and return the reversed list.
 
Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:
Input: head = []
Output: []
 
Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

https://leetcode.com/problems/reverse-linked-list/
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
        }
    }

    reverseList() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

// iterative solution
const reverseList = (head, prev = null) => {
    while (head) {
        // into the head.next value, store previous (this reverses the list)
        // into the previous value, store the head (this is part of moving you along the list, as it updates your previous value correctly. the current value is stored as the previous value now)
        // into the head value (your current value), store the head.next (this moves you along the list, now your current value is the next value\)
        [head.next, prev, head] = [prev, head, head.next];
    }
    return prev;
};

// recursive solution
const reverseListRecursive = (head, prev = null) => {
    if (!this.head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseListRecursive(next, head);
};
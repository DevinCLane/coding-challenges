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
        this.tail = this.head = null;
    }

    append(val) {
        if (!this.tail) {
            this.tail = this.head = new Node(val);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(val);
            oldTail.next = this.tail;
        }
    }

    reverse() {
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
    constructor(val, prev, next) {
        this.val = val;
        this.prev = prev || null;
        this.next = next || null;
    }
}

const reverseLinkedList = (head, prev = null) => {
    [head.next, prev, head] = [prev, head, head.next];
    return prev;
};

const reverseListRecursive = (head, prev = null) => {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseListRecursive(next, head);
};

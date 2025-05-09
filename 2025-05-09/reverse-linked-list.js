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
class Node {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(val) {
        if (!this.tail) {
            this.tail = this.nead = new Node(val);
        } else {
            const oldTail = this.tail;
            this.tail = new Node(val);
            oldTail.next = this.tail;
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;
        while (current) {
            const next = head.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}

const reverseLinkedListRecursive = (head, prev = null) => {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedListRecursive(next, head);
};

const reverseLinkedList = (head, prev = null) => {
    while (head) {
        [head.next, prev, head] = [prev, head, head.next];
    }
    return prev;
};

// take in the head
// current next = current prev
// head prev = null
// current = current next

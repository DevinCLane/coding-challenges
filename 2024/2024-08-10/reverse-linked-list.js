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
            this.tail = new Node(value);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
        }
    }

    reverseList() {
        let prev = null; // store nothing in the prev value
        let current = this.head; // current is the head
        while (current) {
            const temp = current.next; // store the next value in a temp variable
            current.next = prev; // the next node points to the previous (this is reversing)
            prev = current; // move the previous value forward to the current value
            current = temp; // move the current value forward in the list to the next value (which was stored in the temp variable)
        }
        return prev; // return the new head which will be the prev value
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    }
}

const reverseList = (head, prev = null) => {
    while (head) {
        // the head's next pointer points at the previous
        // the previous value becomes the head (the current value), (move the previous value forward)
        // the head (current value) becomes the next value (move along the list)
        [head.next, prev, head] = [prev, head, head.next];
    }
    return prev;
};

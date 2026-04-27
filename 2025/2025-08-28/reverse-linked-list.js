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
    constructor(val, left = null, right = null) {
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
            this.tail = this.head = new Node(val);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(val);
            oldTail.next = this.tail;
        }
    }

    reverse() {
        let prev = null;
        while (head) {
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}

function reverseLinkedList(head, prev = null) {
    [head.next, prev, head] = [prev, head, head.next];
    return prev;
}

function reverseLinkedListRecursive(head, prev = null) {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}

/* 
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
 
Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

https://leetcode.com/problems/middle-of-the-linked-list/
*/

// singly linked
class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if the list is empty
        if (!this.tail) {
            this.tail = this.head = new Node(value)
        }
        else {
            let oldTail = this.head
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
    }

    prepend(value) {
        // if the list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
        }
    }

    middleNode(head) {
        // fast and slow
        let fast = slow = head
        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}
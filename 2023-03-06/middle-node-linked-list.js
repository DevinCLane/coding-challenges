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

// create a linked list
// start at the head
// use two pointers, one goes twice as fast as the other. return the value we stop at.

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        }
        // 
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
    }

    prepend(value) {
        // if list is empty
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
        let fast = slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}

const linkedList = new LinkedList()

console.log(linkedList.middleNode(1))
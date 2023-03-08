/* 
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
        this.head = this.tail = null
    }

    append(value) {
        if (!this.tail) {
            this.tail = this.head = new Node(value)
        }
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
    }

    reverseList() {
        let current = this.head
        let prev = null
        while (current) {
            const next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

// fancy fancy
// const reverseList = (head, prev = null) => {
//     while (head) [head.next, prev, head] = [prev, head, head.next];
//     return prev;
// };

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
console.log(linkedList)
linkedList.reverseList()
console.log(linkedList)
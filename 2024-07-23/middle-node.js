/* 
Middle note of linked list

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

const middleNode = (head) => {
    // fast and slow pointers:
    // fast goes 2x slow.
    // when fast is at the end, slow is at the middle
    let fast = (slow = head);
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

// testing

// define singly linked list node

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// convert linked list to array for testing

function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

console.log(
    linkedListToArray(middleNode(createLinkedList([1, 2, 3, 4, 5]))),
    [3, 4, 5]
);
console.log(
    linkedListToArray(middleNode(createLinkedList([1, 2, 3, 4, 5, 6]))),
    [4, 5, 6]
);

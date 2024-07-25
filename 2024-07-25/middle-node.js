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

// create node of singly linked list

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// convert array into linked list

function createLinkedList(arr) {
    // create a dummy node as the starting point
    let dummy = new ListNode(0);
    // intialize current pointer to the dummy node
    let current = dummy;
    // iterate through each value of the input array
    for (let val of arr) {
        // create a new node with the current value
        current.next = new ListNode(val);
        // move the current pointer to the newly created node
        current = current.next;
    }
    // return the head of the linked list but skip the dummy node
    return dummy.next;
}

// convert linked list back to array for testing
function linkedListToArray(head) {
    // empty array to store the values
    let result = [];
    // start from the head of the linked list
    let current = head;
    // traverse the linked list
    while (current) {
        // add the current node's value to the result array
        result.push(current.val);
        // move to the next node
        current = current.next;
    }
    // return the array
    return result;
}

const middleNode = (head) => {
    // define fast and slow pointers
    // fast goes 2x slow, when fast is at the end, slow will be at the middle
    let fast = (slow = head);
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

console.log(
    linkedListToArray(middleNode(createLinkedList([1, 2, 3, 4, 5]))),
    [3, 4, 5]
);
console.log(
    linkedListToArray(middleNode(createLinkedList([1, 2, 3, 4, 5]))),
    [4, 5, 6]
);

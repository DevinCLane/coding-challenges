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
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

console.log(middleNode([1, 2, 3, 4, 5]), [3, 4, 5]);
console.log(middleNode([1, 2, 3, 4, 5, 6]), [4, 5, 6]);

/* 
314. Binary Tree Vertical Order Traversal - Explanation

You are given the root node of a binary tree, return the vertical order traversal of its nodes' values.
For the vertical order traversal, list the nodes column by column starting from the leftmost column and moving to the right.
Within each column, the nodes should be listed in the order they appear from the top of the tree to the bottom.
If two nodes are located at the same row and column, the node that appears to the left should come before the other.
Example 1:

Input: root = [1,2,3,4,5,6,7]

Output: [[4],[2],[1,5,6],[3],[7]]
Example 2:

Input: root = [1,2,3,null,4,5,null]

Output: [[2],[1,4,5],[3]]
Constraints:
0 <= number of nodes in the tree <= 100
-100 <= Node.val <= 100
*/

class Queue {
    constructor() {
        this.head = this.tail = 0;
        this.storage = {};
    }

    enqueue(item) {
        this.storage[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }

    isEmpty() {
        return this.tail === this.head;
    }

    size() {
        return this.tail - this.head;
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalOrder(root) {
    // base case: if the tree is empty return empty array
    if (!root) return [];

    // intialize Map to store columns.
    // key: column position, value: array of node values
    const cols = new Map();
    // intialize queue with root node and its position as 0
    // queue will store pairs of [node, position]
    const queue = new Queue([[root, 0]]);

    while (!queue.isEmpty()) {
        // get next node and its position from queue
        const [node, pos] = queue.dequeue();
        // if this column position doesn't exist yet, create new array for it
        if (!cols.has(pos)) cols.set(pos, []);
        // add current node's value to its column array
        cols.get(pos).push(node.val);

        // add left child to queue with position -1 for one column left
        if (node.left) queue.enqueue([node.left, pos - 1]);
        // add right child to queue with position + 1 for one column right
        if (node.right) queue.enqueue([node.right, pos + 1]);
    }

    // get all column positions and sort them numerically
    const sortedKeys = Array.from(cols.keys()).sort((a, b) => a - b);
    // return arrays of values for each column in order
    return sortedKeys.map((k) => cols.get(k));
}

/* 
todo: add 

let minCol = 0, maxCol = 0;
// During traversal:
minCol = Math.min(minCol, col);
maxCol = Math.max(maxCol, col);

and 
const res = [];
for (let c = minCol; c <= maxCol; c++) {
    res.push(cols.get(c));
}
*/

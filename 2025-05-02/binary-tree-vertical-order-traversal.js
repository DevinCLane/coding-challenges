/* 
314. Binary Tree Vertical Order Traversal - Explanation
Problem Link
Description
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

// queue
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
        return this.head === this.tail;
    }

    size() {
        return this.tail - this.head;
    }
}

// TreeNode

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// function root
/**
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */
function verticalOrderTraversal(root) {
    // base case: if no root, return []
    if (!root) return [];
    // queue: node, pos [[root, 0]]
    const queue = new Queue([[root, 0]]);
    // map
    const cols = new Map();

    let minCol = 0,
        maxCol = 0;
    // while queue isn't empty
    while (!queue.isEmpty()) {
        // node, pos = dequeue
        const [node, pos] = queue.dequeue();
        // if hash map doesn't have the position, add the position and empty array
        if (!cols.has(pos)) cols.set(pos, []);
        // push the value to the hash map node array
        cols.get(pos).push(node.val);

        // track min and max colums
        minCol = Math.min(minCol, pos);
        maxCol = Math.max(maxCol, pos);

        // if node left enqueue node.left position -1
        if (node.left) queue.enqueue([node.left, pos - 1]);
        // if node right enqueue node.right position + 1
        if (node.right) queue.enqueue([node.right, pos + 1]);
    }

    // instead of sorting, we can just return from the mincol to the max col. thus we eliminate sorting
    // the prior complexity for sorting column keys is O(k log k) where k is number of columns
    // this is linear of O(k) where k is number of columns
    // which means the total is O(n)
    const result = [];
    for (let col = minCol; col <= maxCol; col++) {
        if (cols.has(col)) {
            result.push(cols.get(col));
        }
    }
    return result;
}

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

// implement a queue

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

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 *
 * @param {TreeNode} root
 * @returns {number[][]} - the vertical order traversal of the node values
 */
// function root
function verticalOrderTraversal(root) {
    if (!root) return [];
    // queue [[root, 0]]
    const queue = new Queue([[root, 0]]);
    // map: pos, [nodes]
    const cols = new Map();

    while (!queue.isEmpty()) {
        const [node, pos] = queue.dequeue();
        if (!cols.has(pos)) cols.set(pos, []);
        cols.get(pos).push(node.val);

        if (node.left) queue.enqueue([node.left, pos - 1]);
        if (node.right) queue.enqueue([node.right, pos + 1]);
    }

    const sortedKeys = Array.from(cols.keys()).sort((a, b) => a - b);
    return sortedKeys.map((key) => cols.get(key));
}

// while queue isn't empty
// [node, pos] = queue.dequeue
// if the cols map doesn't have the pos, add it pos, []
// add the node value to the nodes array in the map: map.get(pos).push(node.val)

// if node.left queue.enqueue(node.left, position - 1)
// if node.right queue.enqueue(node.right, position + 1)

// array f rom the maps keys and sort them
// map over the array keys and return their values from the map

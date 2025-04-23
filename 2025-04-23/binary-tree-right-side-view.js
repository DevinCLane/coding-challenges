/* 
199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 
Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Explanation:

Example 2:
Input: root = [1,2,3,4,null,null,null,5]
Output: [1,3,4,5]
Explanation:

Example 3:
Input: root = [1,null,3]
Output: [1,3]
Example 4:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

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
        let removed = this.head;
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

// todo: queue

function rightSideView(root) {
    if (!root) return [];

    // result array
    const result = [];
    // create a new queue
    const queue = new Queue();
    // add the root to the queue
    queue.enqueue(root);

    // while the queue isn't empty
    while (!queue.isEmpty()) {
        // establish right side variable
        let rightSide = null;
        // establish the size of the level
        const levelSize = queue.size();
        // as long as we have more elements in this level
        for (let i = 0; i < levelSize; i++) {
            // dequeue off the left element of the queue to check its children
            // we process all node at the current level before moving to the next level
            const node = queue.dequeue();
            // check the right side
            // right side keeps getting updated as we process each node in the level
            rightSide = node;
            // if it has a left node, enqueue
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        // after the loop finishes processing every node at each level,
        // the last element in the queue will be the right most value of that level
        result.push(rightSide.val);
    }
    return result;
}

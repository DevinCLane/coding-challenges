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

// TreeNode
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

// Queue
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

function rightSide(root) {
    if (!root) return [];
    const result = [];
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
        let rightSide = null;
        const levelSize = queue.size();
        for (let i = 0; i < levelSize; i++) {
            let node = queue.dequeue();
            rightSide = node;
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        result.push(rightSide.val);
    }
    return result;
}

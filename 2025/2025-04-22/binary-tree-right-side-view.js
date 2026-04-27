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
// todo: implement queue
class Queue {
    constructor() {
        this.storage = {};
        this.head = this.tail = 0;
    }

    enqueue(item) {
        this.storage[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }

    size() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.head === this.tail;
    }
}

// binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

/**
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function rightSideView(root) {
    // if there's no root, return empty array
    if (!root) return [];
    // result array
    const result = [];
    // new queue (queue has O(1) time complexity for shifting off the first element of its structure, vs array is O(n) for shift because you have to shift everything over)
    const queue = new Queue();

    // enqueue the root onto the queue
    queue.enqueue(root);

    // as long as the queue isn't empty
    while (!queue.isEmpty()) {
        // establish right side variable
        let rightSide = null;
        // this is level we check of the tree
        const levelSize = queue.size();

        // as long as we have more elements in this level
        for (let i = 0; i < levelSize; i++) {
            // dequeue off the left element of the queue to check its children
            const node = queue.dequeue();
            // check its right side
            rightSide = node;
            // if it has a left node, enqueue onto the queue
            if (node.left) queue.enqueue(node.left);
            // if it has a right node, do the same
            if (node.right) queue.enqueue(node.right);
        }
        // after you've put everything on that level into the queue, the last element you put onto the queue will be the right most value of that level
        result.push(rightSide.val);
    }
    // return the result
    return result;
}

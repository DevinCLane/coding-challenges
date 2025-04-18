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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        // result array
        const result = [];
        // new queue
        const queue = new Queue();

        // add the root to the queue
        queue.push(root);

        // while the queue isn't empty
        while (!queue.isEmpty()) {
            // track right side
            let rightSide = null;
            // track length
            const queueLength = queue.size();

            // loop over the queue
            for (let i = 0; i < queueLength; i++) {
                // grab the left most node off
                const node = queue.dequeue();
                // if it exists
                if (node) {
                    // define the right side as the node
                    rightSide = node;
                    // push the left and right items from that node into the queue
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
            // push the right side to the result
            if (rightSide) {
                result.push(rightSide.val);
            }
        }
        return result;
    }
}

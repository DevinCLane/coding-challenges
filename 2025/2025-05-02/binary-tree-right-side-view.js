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

// function root
function binaryTreeRightSideView(root) {
    if (!root) return [];
    // create queue
    const queue = new Queue();
    // create result array
    const result = [];

    queue.enqueue(root);
    // enqueue the root

    // while the queue isn't empty
    while (!queue.isEmpty()) {
        // level size
        const levelSize = queue.size();
        // the right side
        let rightSide = null;
        // loop over that level
        for (let i = 0; i < levelSize; i++) {
            // node = dequeue the item
            const node = queue.dequeue();
            // right side is this node for now
            rightSide = node;

            // if node.left, enqueue
            // if node.right enqueue
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        // after we finish, then push to the array
        // push to the array
        result.push(rightSide.val);
    }
    // return the result
    return result;
}

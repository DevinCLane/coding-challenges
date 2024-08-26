/* 
Maximum depth of a binary tree 

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/

const maxDepth = (root) => {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function runTests() {
    // empty tree
    console.log(maxDepth(null) === 0);

    // tree with only root
    const root1 = new TreeNode(1);
    console.log(maxDepth(root1) === 1);

    // tree with left child only
    const root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    console.log(maxDepth(root2) === 2);

    // tree with right child only
    const root3 = new TreeNode(1);
    root3.right = new TreeNode(2);
    console.log(maxDepth(root3) === 2);

    // balanced tree
    const root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    root4.right = new TreeNode(3);
    root4.left.left = new TreeNode(4);
    root4.right.right = new TreeNode(5);
    console.log(maxDepth(root4) === 3);

    // unbalanced tree
    const root5 = new TreeNode(1);
    root5.left = new TreeNode(2);
    root5.left.left = new TreeNode(3);
    root5.left.left.left = new TreeNode(4);
    console.log(maxDepth(root5) === 4);
}

runTests();

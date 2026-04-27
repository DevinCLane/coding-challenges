/* 
543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:

Input: root = [1,2]
Output: 1

 

Constraints:

    The number of nodes in the tree is in the range [1, 104].
    -100 <= Node.val <= 100


*/

/**
 * definition for binary tree node
 */
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
 * @returns {number}
 */
function diameterOfBinaryTree(root) {
    // intialize array with single element to store max diameter
    const result = [0];
    // call recursive function
    dfs(root, result);
    // return max result
    return result[0];
}

/**
 *
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number}
 */
function dfs(root, result) {
    // return 0 for null nodes, no length
    if (root === null) return 0;
    // recursively calculate height of left and right subtrees
    const left = dfs(root.left, result);
    const right = dfs(root.right, result);
    // update max diameter - compare current max with path through current node
    result[0] = Math.max(result[0], left + right);
    // return height of current subtree (1+ max of left or right height)
    // the + 1 is needed to account for the parent of the subtrees
    return 1 + Math.max(left, right);
}

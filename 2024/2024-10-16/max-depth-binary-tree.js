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

// test cases
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const test1 = new TreeNode(3);
test1.left = new TreeNode(9);
test1.right = new TreeNode(20);
test1.right.left = new TreeNode(15);
test1.right.right = new TreeNode(7);
console.log(maxDepth(test1), "expected: 3");

const test2 = new TreeNode(1);
test2.right = new TreeNode(2);
console.log(maxDepth(test2), "expected: 2");

const test3 = null;
console.log(maxDepth(test3), "expected: 0");

const test4 = new TreeNode(1);
test4.left = new TreeNode(2);
test4.left.left = new TreeNode(3);
test4.left.left.left = new TreeNode(4);
console.log(maxDepth(test4), "expected: 4");

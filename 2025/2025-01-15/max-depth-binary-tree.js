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

const tree1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};

console.log(maxDepth(tree1), "expect: 3");

// linear tree (only right children)
const tree2 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null,
        },
    },
};
console.log(maxDepth(tree2), "expect: 3");

// Test case 3: Empty tree
console.log(maxDepth(null), "expect: 0");

const tree4 = {
    val: 1,
    left: null,
    right: null,
};
console.log(maxDepth(tree4), "expect: 1");

// Test case 5: Balanced tree
const tree5 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: null,
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
};
console.log(maxDepth(tree5), "expect: 3");

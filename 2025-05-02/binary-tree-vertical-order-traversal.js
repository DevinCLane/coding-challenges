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

// function root
function verticalOrder(root) {
    // base case; if no root, return []
    if (!root) return [];
    // queue [root, []]
    // map: cols, position []
    const queue = new Queue([[root, 0]]);
    const cols = new Map();

    // while queue isn't empty
    while (!queue.isEmpty()) {
        // [pos, node] = queue.dequeue
        const [node, pos] = queue.dequeue();
        // if !cols.has(pos) cols.set(pos, [])
        if (!cols.has(pos)) cols.set(pos, []);
        // set the position and the node[] in the map
        cols.get(pos).push(node.val);

        // if node.left exists, enqueue it with position - 1
        // if node.right exists, enqueue it with position + 1
        if (node.left) queue.enqueue([node.left, position - 1]);
        if (node.right) queue.enqueue([node.right, position + 1]);
    }

    // array from the keys, sort it
    // map over the keys array and return the values from the map
    const sortedKeys = Array.from(cols.keys()).sort((a, b) => a - b);
    return sortedKeys.map((key) => cols.get(key));
}

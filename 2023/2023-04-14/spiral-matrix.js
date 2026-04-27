/* 
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100

*/

const spiralMatrix = (matrix) => {
    let left = 0,
        top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1,
        size = matrix.length * matrix[0].length,
        result = [];

    while (result.length < size) {
        // left to right
        for (let i = left; i <= right && result.length < size; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        // top to bottom
        for (let i = top; i <= bottom && result.length < size; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        // right to left
        for (let i = right; i >= left && result.length < size; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;
        // bottom to top
        for (let i = bottom; i >= top && result.length < size; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }
    return result;
};

console.log(
    spiralMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
    [1, 2, 3, 6, 9, 8, 7, 4, 5]
);

console.log(
    spiralMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ]),
    [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);

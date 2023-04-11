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

// incomplete, doesn't work. getting there though.
const spiralMatrix = (matrix) => {
    let result = [];
    let left = matrix[0][0];
    let right = matrix[0].length - 1;
    let top = matrix[0];
    let bottom = matrix.length - 1;
    // let size = size of the array
    while (result.length < size) {
        for (let i = left; i <= right && result.length < size; i++) {
            result.push(matrix[0][i]);
        }
        top++;

        for (let i = right; i >= bottom && result.length < size; i++) {
            result.push(matrix[i]);
        }
        right--;

        for (let i = bottom; i >= left && result.length < size; i--) {
            result.push(bottom);
        }
        bottom++;

        for (let i = bottom; i >= top && result.length < size; i--) {
            result.push(left);
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

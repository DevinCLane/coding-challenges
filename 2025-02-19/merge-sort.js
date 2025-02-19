/* 
Implement merge sort

[2, 1, 5, 3, 4]
[2, 1, 5], [3, 4]
[2, 1], [5], [3], [4]
[2], [1], [5], [3], [4]
[1, 2, 5], [3, 4]
1, 2, 3, 4, 5
*/

/**
 *
 * @param {number[]} arr - the array to sort
 * @returns {number[]} - the sorted array
 */
function mergeSort(arr) {
    // base case
    // if the array is length 1, then it's already sorted, so return the array
    if (arr.length === 1) return arr;
    // mid point
    const mid = Math.floor(arr.length / 2);
    // left
    const left = arr.slice(0, mid);
    // right
    const right = arr.slice(mid);
    // sorted left - return of mergesort on the left
    const sortedLeft = mergeSort(left);
    // sorted right - return of mergesort on the right
    const sortedRight = mergeSort(right);
    // return merge sort on left and right
    return merge(sortedLeft, sortedRight);
}

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]}
 */
function merge(left, right) {
    // index left
    let indexLeft = 0;
    // index right
    let indexRight = 0;
    // result
    let result = [];
    // while left is less than index left and right index right
    while (indexLeft < left.length && indexRight < right.length) {
        // if left index left is less than right index right
        if (left[indexLeft] < right[indexRight]) {
            // push it into result
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            // otherwise push the right into result
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    // return the concatenation - result concated with the remainder of left and the remainder of right
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([2, 1, 4, 3, 5]), [1, 2, 3, 4, 5]);
console.log(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
console.log(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

/* 
Implement merge sort
*/

/**
 *
 * @param {number[]} arr - array to sort
 * @returns {number[]} - sorted array
 */
function mergeSort(arr) {
    // base case
    if (arr.length === 1) return arr;
    // middle
    const middle = Math.floor(arr.length / 2);
    // left
    const left = arr.slice(0, middle);
    // right
    const right = arr.slice(middle);

    // sorted left
    const sortedLeft = mergeSort(left);
    // sorted right
    const sortedRight = mergeSort(right);
    // merge them
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
    // index right
    let indexLeft = 0;
    let indexRight = 0;
    let result = [];
    // result
    // missing one of the cases?
    // while loop
    while (indexLeft < left.length && indexRight < right.length) {
        // compare left and right
        if (left[indexLeft] < right[indexRight]) {
            // add to result
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    // concatenate results with remainder of left and right
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([5, 2, 3, 4, 1]), [1, 2, 3, 4, 5]);
console.log(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
console.log(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

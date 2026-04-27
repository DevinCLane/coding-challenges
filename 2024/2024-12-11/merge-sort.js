/* 
Implement merge sort

[4, 2, 6, 1, 6]

[4, 2] [6, 1, 6]
[4] [2] [6, 1] [6]
[4] [2] [6] [1] [6]
[2, 4] [6, 1, 6] 
[1, 2, 4, 6, 6]
*/

/**
 *
 * @param {number[]} arr - the array to sort
 * @returns {number[]} - the sorted array
 */
function mergeSort(arr) {
    // base case - if arr.length === 1 return arr
    if (arr.length === 1) {
        return arr;
    }
    // splitting things into smaller arrays
    // middle
    const middle = Math.floor(arr.length / 2);
    // left - slice from 0 to middle
    const left = arr.slice(0, middle);
    // right - slice from middle to end
    const right = arr.slice(middle);
    //  sorted left
    const sortedLeft = mergeSort(left);
    // sorted right
    const sortedRight = mergeSort(right);
    // return merge(sorted left, sorted right)
    return merge(sortedLeft, sortedRight);
}

/**
 *
 * @param {number[]} left - the left side arrays to sort
 * @param {number[]} right - the right side arrays to sort
 * @returns {number[]} - sorted arrays back to the merge sort function
 */
function merge(left, right) {
    // result array]
    let result = [];
    // index left
    let indexLeft = 0;
    // index right
    let indexRight = 0;

    // while index left is less than left length, same for right
    while (indexLeft < left.length && indexRight < right.length) {
        // if left index left is less than right index right
        if (left[indexLeft] < right[indexRight]) {
            // push left into the result
            result.push(left[indexLeft]);
            // increment left index
            indexLeft++;
            // otherwise do the same for the right
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    // return concatented array
    // concat result with left(slice from index left to end), same with right
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

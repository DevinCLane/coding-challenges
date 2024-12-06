/* 
Implement merge sort
*/

function mergeSort(arr) {
    // base case
    if (arr.length === 1) {
        return arr;
    }

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
    // call to merge
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // result
    let result = [];
    // index left
    let indexLeft = 0;
    // index right
    let indexRight = 0;

    // while index left is less than left length, same for right
    while (indexLeft < left.length && indexRight < right.length) {
        // if the left number is smaller than right
        if (left[indexLeft] < right[indexRight]) {
            // push the left into the result
            result.push(left[indexLeft]);
            // increment the left index
            indexLeft++;
            // otherwise do the same for the right
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    // return, concat: result and slice of left from index til end, same with the right
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

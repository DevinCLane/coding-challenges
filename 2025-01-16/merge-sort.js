/* 
Implement merge sort

[5, 1, 3, 4]
[5, 1] [3, 4]
[5][1][3][4]
[1, 5][3, 4]
[1, 3, 4, 5]
*/

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    // divide into halves recursively until we reach single elements
    // middle item of the array rounded down
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    // return the result, and add the remaining of left and right (slice them both)
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

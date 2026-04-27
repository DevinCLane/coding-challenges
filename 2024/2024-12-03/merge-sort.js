/* 
Implement merge sort

[2, 5, 1, 0, 9]
[2, 5] [1, 0, 9]
[2] [5] [1, 0] [9]
[2] [5] [1] [0] [9]
[2, 5] [0, 1, 9]
[0, 1, 2, 5, 9]
*/

function mergeSort(arr) {
    // establish base case
    if (arr.length === 1) {
        return arr;
    }

    // split the array into left and right sides
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // check if the left side is less than the right side, merge them
    // concatenate each array together
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    // while the index isn't past the end of the array
    while (indexLeft < left.length && indexRight < right.length) {
        // if the left element is smaller than the right element
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    // concatenate the result with the remainder of the left array and the remainder of the right array
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

/* 
Implement merge sort

[2, 4, 1, 5, 3]
[2, 4][1, 5, 3]
[2][4] [1, 5] [3]
[2][4] [1] [5] [3]

[2, 4] [1, 5, 3]
[1, 2, 3, 4, 5]
*/

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    // middle
    const middle = Math.floor(arr.length / 2);
    // left
    const left = arr.slice(0, middle);
    // right
    const right = arr.slice(middle);

    // merge the left
    const sortedLeft = mergeSort(left);
    // merge the right
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    // while we aren't to the end of the arrays
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

/* 
Implement merge sort
[2, 5, 1, 6]
[2, 5] [1, 6]
[2] [5] [1] [6]
[2, 5] [1, 6]
[1, 2, 5, 6]
*/

function mergeSort(arr) {
    // base case if arr.length === 1 return arr
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

    // return merge(sorted left and sorted right)
    return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
    // result
    let result = [];
    // index left
    let indexLeft = 0;
    // index right
    let indexRight = 0;

    // while index left is less than left length, same with right
    while (indexLeft < left.length && indexRight < right.length) {
        // if left index left is less than right index right
        if (left[indexLeft] < right[indexRight]) {
            // push it to result
            result.push(left[indexLeft]);
            // increase left index
            indexLeft++;
        } else {
            // otherwise push right
            result.push(right[indexRight]);
            // increase right index
            indexRight++;
        }
    }

    // return the result concatenated with left, slice from indexleft to end, and right, slice with index right to end
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

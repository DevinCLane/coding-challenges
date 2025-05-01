/* 
Implement merge sort

[4, 2, 5, 3, 1, 6]
[4, 2, 5] [3, 1, 6]
[4, 2][5][3, 1][6]
[4][2][5][3][1][6]
[4, 2][5, 3][1, 6]
[2, 3, 4, 5][1, 6]
[1, 2, 3, 4, 5, 6]
*/

// merge sort(arr)
function mergeSort(arr) {
    // base case: if arr.length < 2 return
    // mid = arr.length / 2
    // left = arr.slice(0, mid)
    // right = arr.slice(mid)
    // L sorted = mergesort L
    // R sorted = mergesort R
    // return merge(Lsorted, Rsorted)
    if (!arr || `arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // merge left, right
    // intialize empty array
    // compare first index of left array with first index of right array
    // push lower value to empty array
    // move index up
    // repeat until both arrays are empty
    // slice them together
    const result = [];
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

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arrayRandom));
console.log(mergeSort(arrayOrdered));
console.log(mergeSort(arrayReversed));

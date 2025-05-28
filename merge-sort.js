/* 
Implement merge sort
[2, 4, 5, 1]
[2, 4][5, 1]
[2][4][5][1]
[2, 4], [1, 5]
[1, 2, 4, 5]
*/

// function mergeSort
// if arr.length === 1 return arr
// sortedleft = mergesort(left)
// sortedright = mergesort(right)
// mid = math.floor left + right / 2
// return merge(sortedleft, sortedright)
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    // divide into halves recursively until we reach single elements
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // once we have single elements, run this merge function on the left and right
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let indexLeft = 0;
    let indexRight = 0;
    const result = [];
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

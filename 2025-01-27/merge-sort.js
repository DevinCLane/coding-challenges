/* 
Implement merge sort
*/

function mergeSort(arr) {
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
    // return merge on sorted left and sorted right
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // index left
    let indexLeft = 0;
    // index right
    let indexRight = 0;
    // let result array
    let result = [];
    // while left < right
    while (indexLeft < left.length && indexRight < right.length) {
        // if left is bigger than right
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            // increment index
            indexLeft++;
        } else {
            // otherwise add right to the result
            result.push(right[indexRight]);
            // increment index
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    // return left and right, concatenate the rest of the array onto the result
}

console.log(mergeSort([5, 2, 3, 4, 1]));
console.log(mergeSort([5, 4, 3, 2, 1]));
console.log(mergeSort([1, 2, 3, 4, 5]));

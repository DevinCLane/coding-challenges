/* 
Implement merge sort
*/

function mergeSort(arr) {
    // if arr.length === 0 return arr
    if (arr.length === 1) return arr;
    // split the arrays in smaller chunks
    // middle
    const middle = Math.floor(arr.length / 2);
    // left
    const left = arr.slice(0, middle);
    // right
    const right = arr.slice(middle);
    // sorted left = recursive call on mergesort(left)
    const sortedLeft = mergeSort(left);
    // sorted right = recursive call on mergesort(right)
    const sortedRight = mergeSort(right);
    // return merge(sortedLeft, sortedRight)
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // result array
    let result = [];
    // index left
    let indexLeft = 0;
    // index right
    let indexRight = 0;
    // while indexleft < left.length && indexright < right.length
    while (indexLeft < left.length && indexRight < right.length) {
        // if (left[indexleft] < right[indexright])
        if (left[indexLeft] < right[indexRight]) {
            // result.push(left[indexleft])
            result.push(left[indexLeft]);
            // indexleft++
            indexLeft++;
            // do the same on right
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    // return result.concat(left.slice(indexleft)).concat(right.slice(indexright))
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([5, 2, 3, 4, 1]), [1, 2, 3, 4, 5]);
console.log(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
console.log(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

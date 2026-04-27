/* 
implement optimized bubble sort that doesn't run extra iterations if there are no swaps
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 *
 * @param {number[]} arr - array to sort
 * @returns {number[]} - sorted array
 */
const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

console.log(bubbleSort([4, 2, 5, 1, 3]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([4, 2, 1, 5, 3]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

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
 * @param {number[]} arr - the array to sort
 * @returns {number[]} - the sorted array
 */
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        // go to the second to last element so that we don't go past this and check
        // an undefined element after the last spot in the array
        // otherwise we would need if (arr[i] && arr[i + 1]) to check if they still exist
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    // compare each number to the next number and swap if one is less than the next one
    // set a swapped variable
    // do while loop
    // while swapped is false, run the loop

    // set swapped to true if you swap
    return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([1, 4, 2, 3, 5]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);

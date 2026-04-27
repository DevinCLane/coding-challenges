/* 
implement optimized bubble sort that doesn't run extra iterations if there are no swaps

[5, 2, 6, 1, 2] => [1, 2, 2, 5, 6]
[5, 4, 3, 2, 1] => [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]
*/

// create a swap function
// take in i, j, and the array
// swap their places in the array
function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// bubble sort function
function bubbleSort(arr) {
    let swapped;
    // loop and ask is this value greater than the value to its right?
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
                // if so swap, otherwise move forward
                swap(i, i + 1, arr);
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// come back for the not running extra iterations if there are no swaps
console.log(bubbleSort([5, 2, 6, 1, 2]), [1, 2, 2, 5, 6]);
console.log(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

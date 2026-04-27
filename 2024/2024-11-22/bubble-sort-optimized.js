/* 
implement optimized bubble sort that doesn't run extra iterations if there are no swaps
*/

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// loop through the list until there is an iteration of the loop
// where we don't swap at all, then return the array
function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

console.log(bubbleSort(arrayRandom));
console.log(bubbleSort(arrayOrdered));
console.log(bubbleSort(arrayReversed));

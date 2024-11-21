/* 
implement bubble sort
[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
*/
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// naive implementation
function bubbleSortBasic(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            }
        }
    }
    return array;
}

console.log(
    bubbleSortBasic(arrayRandom),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(
    bubbleSortBasic(arrayOrdered),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(
    bubbleSortBasic(arrayReversed),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);

function bubbleSort(array) {
    // keep track of the swaps
    // if there is an iteration where we don't swap, just return
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

console.log(bubbleSort(arrayRandom), "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log(
    bubbleSort(arrayOrdered),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(
    bubbleSort(arrayReversed),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);

/* 
implement optimized bubble sort that doesn't run extra iterations if there are no swaps
*/

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
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
}
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(bubbleSort(arrayRandom), "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log(
    bubbleSort(arrayOrdered),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(
    bubbleSort(arrayReversed),
    "expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);

/* 

Implement basic bubble sort

*/

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// bubble sort - compare each value to the next value, if the value on the left is bigger, flip places

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubbleSort(arr) {
    // nested loops
    // if arr[j] is greater than arr[j + 1], swap
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arrayOrdered));
console.log(bubbleSort(arrayRandom));
console.log(bubbleSort(arrayReversed));
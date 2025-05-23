/* 
Implement basic bubble sort

[4, 2, 3, 5, 1]
[2, 4, 3, 5, 1]
[2, 3, 4, 5, 1]
[2, 3, 4, 1, 5]
[2, 3, 1, 4, 5]
[2, 1, 3, 4, 5]
[1, 2, 3, 4, 5]
*/

// swap function
// function nums
// loop i
// if i && i + 1 && i < i + 1
// swap

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
    return arr;
}

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(arrayOrdered));
console.log(bubbleSort(arrayRandom));
console.log(bubbleSort(arrayReversed));

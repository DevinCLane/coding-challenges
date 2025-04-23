/* 
Implement basic bubble sort
[4, 2, 5, 3, 1] 
4 > 2 ?
[2, 4]
4 > 5?
[4, 5]

*/

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    // loop over the array
    // [5, 2, 3, 4, 1]
    for (let i = 0; i < arr.length; i++) {
        //  [2, 3, 4, 1]
        for (let j = 1; j < arr.length; j++) {
            // 5 > 2 ?
            // you have to look backwards to count the outer loop
            if (arr[j - 1] > arr[j]) {
                // swap
                swap(arr, j, j - 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arrayOrdered));
console.log(bubbleSort(arrayRandom));
console.log(bubbleSort(arrayReversed));

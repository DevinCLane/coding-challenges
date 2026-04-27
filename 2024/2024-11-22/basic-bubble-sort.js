/* 
Implement basic bubble sort
*/
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j, j - 1);
            }
        }
    }
    return array;
}

console.log(bubbleSort(arrayRandom));
console.log(bubbleSort(arrayOrdered));
console.log(bubbleSort(arrayReversed));

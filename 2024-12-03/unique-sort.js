/* 
Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

function uniqueSort(arr) {
    // create a set
    const set = new Set(arr);
    const uniqueArr = Array.from(set);
    return uniqueArr.sort((a, b) => a - b);
}

console.log(uniqueSort([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

function uniqueSort2(arr) {
    const cache = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            result.push(arr[i]);
            cache[arr[i]] = true;
        }
    }

    return result.sort((a, b) => a - b);
}

console.log(uniqueSort2([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort2([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

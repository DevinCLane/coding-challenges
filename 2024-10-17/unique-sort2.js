/* 
Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

const uniqueSort = (arr) => {
    const map = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        // if its not in the map
        // add to the result array
        // otherwise add to the map
        if (!map[arr[i]]) {
            result.push(arr[i]);
            map[arr[i]] = true;
        }
    }
    return result.sort((a, b) => a - b);
};

console.log(uniqueSort([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

const uniqueSort2 = (arr) => {
    const uniqueSet = new Set(arr);
    const uniqueArr = Array.from(uniqueSet);
    return uniqueArr.sort((a, b) => a - b);
};

console.log(uniqueSort2([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort2([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

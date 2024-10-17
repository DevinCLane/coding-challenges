/* 
Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

const uniqueSort = (arr) => {
    const cache = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            result.push(arr[i]);
            cache[arr[i]] = true;
        }
    }
    return result.sort((a, b) => a - b);
};

console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]); // => [2,3,4]

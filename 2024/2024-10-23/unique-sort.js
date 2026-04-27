/* 
Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

const uniqueSort = (arr) => {
    // create a set, convert back to array
    const set = new Set(arr);
    const uniqueArr = Array.from(set);
    return uniqueArr.sort((a, b) => a - b);
};

console.log(uniqueSort([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

// using hash map / cache
const uniqueSort2 = (arr) => {
    // create a hash map
    const cache = {};
    // create a results array
    const results = [];
    // loop over the array
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            results.push(arr[i]);
            cache[arr[i]] = true;
        }
    }
    return results.sort((a, b) => a - b);
};

console.log("~~unique sort with hash map~~");
console.log(uniqueSort2([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort2([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

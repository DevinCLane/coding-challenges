/* 
Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

/**
 * takes in an array of numbers and returns an array of
 * sorted numbers with no duplicates
 * @param {number[]} arr - the input array
 * @returns {number[]} - a sorted array with all unique values
 */
const uniqueSort = (arr) => {
    // make a set, sort it, return
    const set = new Set(arr);
    return Array.from(set).sort((a, b) => a - b);
};

console.log(uniqueSort([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

/**
 * takes in an array of numbers and returns an array of
 * sorted numbers with no duplicates
 * @param {number[]} arr - the input array
 * @returns {number[]} - a sorted array with all unique values
 */
const uniqueSort2 = (arr) => {
    const cache = {};
    const result = [];
    for (const num of arr) {
        if (cache[num] === undefined) {
            result.push(num);
            cache[num] = true;
        }
    }
    return result.sort((a, b) => a - b);
};

console.log(uniqueSort2([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort2([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

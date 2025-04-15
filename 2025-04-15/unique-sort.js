/* 

Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]

*/

const uniqueSort = (arr) => {
    // create a set from the array
    const set = new Set(arr);
    // convert back into an array
    return Array.from(set).sort((a, b) => a - b);
};

console.log(uniqueSort([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

const uniqueSort2 = (arr) => {
    // result array
    let result = [];
    // hash map
    const cache = {};
    // loop over array
    for (const num of arr) {
        if (!(num in cache)) {
            result.push(num);
            cache[num] = true;
        }
    }
    return result.sort((a, b) => a - b);
};

console.log(uniqueSort2([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort2([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

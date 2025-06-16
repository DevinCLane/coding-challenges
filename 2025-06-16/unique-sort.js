/* 

Task: Transform this simple sorting algorithm into a unique sort.
It should not return any duplicate values in the sorted array.

input: [1,5,2,1] => output: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

const uniqueSort = (arr) => {
    // cache
    const cache = {};
    const result = [];
    // loop
    for (const num of arr) {
        if (cache[num] === undefined) {
            result.push(num);
            cache[num] = true;
        }
    }
    // if value !== cache, add value to cache as true, push to new array
    // set value in cache to true
    // return sorted array
    return result.sort((a, b) => a - b);
};

console.log(uniqueSort([1, 5, 2, 1]), [1, 2, 5]);
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);

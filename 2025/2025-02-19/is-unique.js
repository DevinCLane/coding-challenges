/* 
check if an array has all unique items, and optimize this with a caching algorithm (use a hash map)

*/

/**
 *
 * @param {number[]} arr - the input array
 * @returns {boolean} - true/false if the array has all unique items
 */
const isUnique = (arr) => {
    // create a hash map
    const cache = {};
    // loop over the array
    for (const num of arr) {
        if (num in cache) {
            return false;
        } else {
            cache[num] = true;
        }
    }
    // if the current value is in the hashmap, return false
    // otherwise add the current value to the hashmap
    // return true if we make it all the way
    return true;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

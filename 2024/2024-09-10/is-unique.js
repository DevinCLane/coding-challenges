/* 

check if an array has all unique items, and optimize this with a caching algorithm (use a hash map)

1console.log(isUnique([1, 2, 3, 4, 5]), true);
2console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
3console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
4console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

*/

/**
 *
 * @param {number[]} arr - the array of numbers we are testing
 * @returns {boolean} - true or false if it has all unique values
 */
const isUnique = (arr) => {
    // set up a cache
    const cache = {};
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // if the cache has the value, return false
        if (cache[arr[i]]) {
            return false;
            // otherwise add the value to the cache
        } else {
            cache[arr[i]] = i;
        }
    }

    // return true if we made it through the whole array
    return true;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

/* 
check if an array has all unique items, and optimize this with a caching algorithm (use a hash map)
*/

/**
 *
 * @param {number[]} arr - the array we are checking
 * @return {boolean} - true/false if the array has all unique items
 */
const isUnique = (arr) => {
    // set a hash map call it cache
    const cache = {};
    // loop
    for (let i = 0; i < arr.length; i++) {
        // if the item is in the hash map, return false
        if (cache[arr[i]]) {
            return false;
            // otherwise add the item and a true value to the hash map
        } else {
            cache[arr[i]] = true; // or just set it to equal its index of i
        }
    }
    // keep it true
    return true;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

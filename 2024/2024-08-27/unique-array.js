/* 
check if an array has all unique items, and optimize this with a caching algorithm (use a hash map)
*/

const isUnique = (arr) => {
    const cache = {};
    for (let i = 0; i < arr.length; i++) {
        if (cache[arr[i]]) {
            return false;
        } else {
            cache[arr[i]] = i;
        }
    }
    return true;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

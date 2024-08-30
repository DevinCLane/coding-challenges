/* 
check if an array has all unique items, and optimize this with a caching algorithm (use a hash map)

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);
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

// optimized with set
const isUnique2 = (arr) => {
    if (!Array.isArray(arr)) return false;
    return new Set(arr).size === arr.length;
};

console.log(isUnique2([1, 2, 3, 4, 5]), true);
console.log(isUnique2([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique2([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique2([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

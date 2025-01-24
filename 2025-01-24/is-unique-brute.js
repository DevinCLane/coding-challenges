/* 
check if an array has all unique items (naively/brute force)

*/
// for each item, check it again every other item of the array

const isUnique = (arr) => {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                result = false;
            }
        }
    }
    return result;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

const isUnique2 = (arr) => {
    const cache = {};
    for (const num of arr) {
        if (num in cache) {
            return false;
        } else {
            cache[num] = true;
        }
    }
    return true;
};

console.log(isUnique2([1, 2, 3, 4, 5]), true);
console.log(isUnique2([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique2([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique2([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

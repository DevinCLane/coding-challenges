/* 
check if an array has all unique items
*/

const isUnique = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 4]), false);
console.log(isUnique([1, 2, 3, 4, 5, 6, 8]), true);
console.log(isUnique([1, 2, 4, 3, 4, 5, 6, 8]), false);

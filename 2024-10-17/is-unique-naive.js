/* 

check if an array has all unique items (naively/brute force)



*/
const isUnique = (arr) => {
    // nested loops
    // if i === 0 return false
    // return true
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isUnique([1, 2, 3, 4, 5]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

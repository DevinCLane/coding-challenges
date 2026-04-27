/* 
check if an array has all unique items

1console.log(isUnique([1, 2, 3, 4, 5]), true);
2console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
3console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
4console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

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
console.log(isUnique([1, 2, 3, 4, 5, 5]), false);
console.log(isUnique([1, 2, 3, 4, 5, 10, -1]), true);
console.log(isUnique([1, 2, 3, 4, 5, 5, 10, -1, 2]), false);

/* 
check if an array has all unique items
https://frontendmasters.com/courses/practical-algorithms/faster-algorithms/
*/
const isUnique = (arr) => {
    let result = true;
    // for each item, check it against every other item of the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                result = false;
            }
        }
    }
    return result;
};

console.log(isUnique([1, 2, 3]), true);
console.log(isUnique([1, 2, 3, 3]), false);

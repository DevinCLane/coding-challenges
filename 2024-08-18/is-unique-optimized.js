/* 
check if an array has all unique items
use a caching method to improve the algorithm

time complexity takes a quadratic o(n^2) then turns it into linear o(n)
*/

const isUnique = (arr) => {
    const cache = {};
    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~ loop ~~~ i === ${i}`);
        console.log(`~~~ cache ~~~`, cache);
        if (cache[arr[i]]) {
            return false;
        } else {
            cache[i] = arr[i];
        }
    }
    return true;
};

console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1, 2, 3, 2]) === true);

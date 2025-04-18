/* 
Even numbers in an array

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers. For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/solutions/javascript
*/

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const evenNumbers = (arr, number) => {
    // filter for even numbers
    // return slice from that number to the end
    return arr.filter((n) => n % 2 === 0).slice(-number);
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(
    evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2),
    [-8, 26]
);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);

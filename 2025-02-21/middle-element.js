/* 
Find the middle element

You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

https://www.codewars.com/kata/545a4c5a61aa4c6916000755/
*/

/**
 * Receive a input array of 3 numbers, return the index of the number that sits in the middle of the 3
 * @param {number[]} arr - input array
 * @returns {number} - the index of the number that sits in the middle of the 3 input numbers
 */
const middleElement = (arr) => {
    // sort the array
    const sorted = [...arr].sort((a, b) => a - b);
    // find the middle element
    const middle = sorted[1];
    // look up what index that number is on the original array
    return arr.indexOf(middle);
};

console.log(middleElement([2, 3, 1]), 0);
console.log(middleElement([5, 10, 14]), 1);

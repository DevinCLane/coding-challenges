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
 *
 * @param {Array} arr
 * @returns number
 */

const middleElement = (arr) => {
    // make a new copy of the array (because sort mutates array in place)
    // sort the array, find the 1st index element, because in a 3 element array this will be the middle element
    // find the index of this in the original array
    return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
};
console.log(middleElement([2, 3, 1]), 0);
console.log(middleElement([5, 10, 14]), 1);

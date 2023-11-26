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

function middleElement(arr) {
    // sort the arrays
    // store middle element as the middle variable
    // return the index of the middle element from the original array
    // return the index of the middle element.
    // find which is the middle element
    // return the index of that middle element from the original array
    const middle = arr.toSorted((a, b) => a - b)[1];
    return arr.indexOf(middle);
}
console.log(middleElement([5, 10, 14]), 1);
console.log(middleElement([2, 3, 1]), 0);
console.log(middleElement([1, 2, 4]), 1);
console.log(middleElement([2, 6, 3]), 2);

// spread the array into a new array, thus making a copy.
// we do this because sort sorts in place and modifies the original array
function middleElement2(arr) {
    return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
}

console.log(middleElement2([5, 10, 14]), 1);
console.log(middleElement2([2, 3, 1]), 0);
console.log(middleElement2([1, 2, 4]), 1);
console.log(middleElement2([2, 6, 3]), 2);

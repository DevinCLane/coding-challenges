/* 
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

const gimme = arr => {
    // sort the array, making a copy first using ES6+ spread syntax
    const sorted = [...arr].sort((a, b) => a - b)
    const middle = sorted[1]
    return arr.indexOf(middle)
    // identify which number fits in the middle (there's always 3 elements in this array, so that will arrSorted[1])
    // find the index of this number in the original array, return that number
}

console.log(gimme([5, 10, 14]), 1)
console.log(gimme([2, 3, 1]), 0)